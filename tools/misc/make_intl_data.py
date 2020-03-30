#!/usr/bin/env python
# -*- coding: utf-8 -*-
#
# Copyright (C) 2020 Mozilla Corporation. All rights reserved.
#
# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.
#
# Original file:
# https://hg.mozilla.org/mozilla-central/file/tip/js/src/builtin/intl/make_intl_data.py

""" Usage:
    make_intl_data.py langtags [cldr_core.zip]


    Target "langtags":
    This script extracts information about 1) mappings between deprecated and
    current Unicode BCP 47 locale identifiers, and 2) deprecated and current
    BCP 47 Unicode extension value from CLDR.
"""

from __future__ import print_function
import os
import re
import io
import sys
from contextlib import closing
from functools import partial
from operator import itemgetter
from zipfile import ZipFile

if sys.version_info.major == 2:
    from urllib2 import urlopen
else:
    from urllib.request import urlopen


def read_supplemental_data(core_file):
    """ Reads CLDR Supplemental Data and extracts information for Intl.js.

        Information extracted:
        - grandfatheredMappings: mappings from grandfathered tags to preferred
          complete language tags
        - languageMappings: mappings from language subtags to preferred subtags
        - complexLanguageMappings: mappings from language subtags with complex rules
        - regionMappings: mappings from region subtags to preferred subtags
        - complexRegionMappings: mappings from region subtags with complex rules
        - variantMappings: mappings from variant subtags to preferred subtags
        Returns these mappings as dictionaries.
    """
    import xml.etree.ElementTree as ET

    # From Unicode BCP 47 locale identifier <https://unicode.org/reports/tr35/>.
    re_unicode_language_id = re.compile(
        r"""
        ^
        # unicode_language_id = unicode_language_subtag
        #     unicode_language_subtag = alpha{2,3} | alpha{5,8}
        (?P<language>[a-z]{2,3}|[a-z]{5,8})

        # (sep unicode_script_subtag)?
        #     unicode_script_subtag = alpha{4}
        (?:-(?P<script>[a-z]{4}))?

        # (sep unicode_region_subtag)?
        #     unicode_region_subtag = (alpha{2} | digit{3})
        (?:-(?P<region>([a-z]{2}|[0-9]{3})))?

        # (sep unicode_variant_subtag)*
        #     unicode_variant_subtag = (alphanum{5,8} | digit alphanum{3})
        (?P<variants>(-([a-z0-9]{5,8}|[0-9][a-z0-9]{3}))+)?
        $
        """, re.IGNORECASE | re.VERBOSE)

    re_unicode_language_subtag = re.compile(
        r"""
        ^
        # unicode_language_subtag = alpha{2,3} | alpha{5,8}
        ([a-z]{2,3}|[a-z]{5,8})
        $
        """, re.IGNORECASE | re.VERBOSE)

    re_unicode_region_subtag = re.compile(
        r"""
        ^
        # unicode_region_subtag = (alpha{2} | digit{3})
        ([a-z]{2}|[0-9]{3})
        $
        """, re.IGNORECASE | re.VERBOSE)

    re_unicode_variant_subtag = re.compile(
        r"""
        ^
        # unicode_variant_subtag = (alphanum{5,8} | digit alphanum{3})
        ([a-z0-9]{5,8}|(?:[0-9][a-z0-9]{3}))
        $
        """, re.IGNORECASE | re.VERBOSE)

    # The fixed list of BCP 47 grandfathered language tags.
    grandfathered_tags = (
        "art-lojban",
        "cel-gaulish",
        "en-GB-oed",
        "i-ami",
        "i-bnn",
        "i-default",
        "i-enochian",
        "i-hak",
        "i-klingon",
        "i-lux",
        "i-mingo",
        "i-navajo",
        "i-pwn",
        "i-tao",
        "i-tay",
        "i-tsu",
        "no-bok",
        "no-nyn",
        "sgn-BE-FR",
        "sgn-BE-NL",
        "sgn-CH-DE",
        "zh-guoyu",
        "zh-hakka",
        "zh-min",
        "zh-min-nan",
        "zh-xiang",
    )

    # The list of grandfathered tags which are valid Unicode BCP 47 locale identifiers.
    unicode_bcp47_grandfathered_tags = {tag for tag in grandfathered_tags
                                        if re_unicode_language_id.match(tag)}

    # Dictionary of simple language subtag mappings, e.g. "in" -> "id".
    language_mappings = {}

    # Dictionary of complex language subtag mappings, modifying more than one
    # subtag, e.g. "sh" -> ("sr", "Latn", None) and "cnr" -> ("sr", None, "ME").
    complex_language_mappings = {}

    # Dictionary of simple region subtag mappings, e.g. "DD" -> "DE".
    region_mappings = {}

    # Dictionary of complex region subtag mappings, containing more than one
    # replacement, e.g. "SU" -> ("RU", ["AM", "AZ", "BY", ...]).
    complex_region_mappings = {}

    # Dictionary of aliased variant subtags to a tuple of preferred replacement
    # type and replacement, e.g. "arevela" -> ("language", "hy") or
    # "aaland" -> ("region", "AX") or "heploc" -> ("variant", "alalc97").
    variant_mappings = {}

    # Dictionary of grandfathered mappings to preferred values.
    grandfathered_mappings = {}

    # CLDR uses "_" as the separator for some elements. Replace it with "-".
    def bcp47_id(cldr_id):
        return cldr_id.replace("_", "-")

    # CLDR uses the canonical case for most entries, but there are some
    # exceptions, like:
    #   <languageAlias type="drw" replacement="fa_af" reason="deprecated"/>
    # Therefore canonicalize all tags to be on the safe side.
    def bcp47_canonical(language, script, region):
        # Canonical case for language subtags is lower case.
        # Canonical case for script subtags is title case.
        # Canonical case for region subtags is upper case.
        return (language.lower() if language else None,
                script.title() if script else None,
                region.upper() if region else None)

    tree = ET.parse(core_file.open("common/supplemental/supplementalMetadata.xml"))

    for language_alias in tree.iterfind(".//languageAlias"):
        type = bcp47_id(language_alias.get("type"))
        replacement = bcp47_id(language_alias.get("replacement"))

        # Handle grandfathered mappings first.
        if type in unicode_bcp47_grandfathered_tags:
            grandfathered_mappings[type] = replacement
            continue

        # We're only interested in language subtag matches, so ignore any
        # entries which have additional subtags.
        if re_unicode_language_subtag.match(type) is None:
            continue

        assert type.islower()

        if re_unicode_language_subtag.match(replacement) is not None:
            # Canonical case for language subtags is lower-case.
            language_mappings[type] = replacement.lower()
        else:
            replacement_match = re_unicode_language_id.match(replacement)
            assert replacement_match is not None, (
                   "{} invalid Unicode BCP 47 locale identifier".format(replacement))
            assert replacement_match.group("variants") is None, (
                   "{}: unexpected variant subtags in {}".format(type, replacement))

            complex_language_mappings[type] = bcp47_canonical(replacement_match.group("language"),
                                                              replacement_match.group("script"),
                                                              replacement_match.group("region"))

    for territory_alias in tree.iterfind(".//territoryAlias"):
        type = territory_alias.get("type")
        replacement = territory_alias.get("replacement")

        # We're only interested in region subtag matches, so ignore any entries
        # which contain legacy formats, e.g. three letter region codes.
        if re_unicode_region_subtag.match(type) is None:
            continue

        assert type.isupper() or type.isdigit()

        if re_unicode_region_subtag.match(replacement) is not None:
            # Canonical case for region subtags is upper-case.
            region_mappings[type] = replacement.upper()
        else:
            # Canonical case for region subtags is upper-case.
            replacements = [r.upper() for r in replacement.split(" ")]
            assert all(
                re_unicode_region_subtag.match(loc) is not None for loc in replacements
            ), "{} invalid region subtags".format(replacement)
            complex_region_mappings[type] = replacements

    for variant_alias in tree.iterfind(".//variantAlias"):
        type = variant_alias.get("type")
        replacement = variant_alias.get("replacement")

        assert re_unicode_variant_subtag.match(type) is not None, (
               "{} invalid variant subtag".format(type))

        # Normalize the case, because some variants are in upper case.
        type = type.lower()

        # The replacement can be a language, a region, or a variant subtag.
        # Language and region subtags are case normalized, variant subtags can
        # be in any case.

        if re_unicode_language_subtag.match(replacement) is not None and replacement.islower():
            variant_mappings[type] = ("language", replacement)

        elif re_unicode_region_subtag.match(replacement) is not None:
            assert replacement.isupper() or replacement.isdigit(), (
                   "{} invalid variant subtag replacement".format(replacement))
            variant_mappings[type] = ("region", replacement)

        else:
            assert re_unicode_variant_subtag.match(replacement) is not None, (
                   "{} invalid variant subtag replacement".format(replacement))
            variant_mappings[type] = ("variant", replacement.lower())

    tree = ET.parse(core_file.open("common/supplemental/likelySubtags.xml"))

    likely_subtags = {}

    for likely_subtag in tree.iterfind(".//likelySubtag"):
        from_tag = bcp47_id(likely_subtag.get("from"))
        from_match = re_unicode_language_id.match(from_tag)
        assert from_match is not None, (
               "{} invalid Unicode BCP 47 locale identifier".format(from_tag))
        assert from_match.group("variants") is None, (
               "unexpected variant subtags in {}".format(from_tag))

        to_tag = bcp47_id(likely_subtag.get("to"))
        to_match = re_unicode_language_id.match(to_tag)
        assert to_match is not None, (
               "{} invalid Unicode BCP 47 locale identifier".format(to_tag))
        assert to_match.group("variants") is None, (
               "unexpected variant subtags in {}".format(to_tag))

        from_canonical = bcp47_canonical(from_match.group("language"),
                                         from_match.group("script"),
                                         from_match.group("region"))

        to_canonical = bcp47_canonical(to_match.group("language"),
                                       to_match.group("script"),
                                       to_match.group("region"))

        likely_subtags[from_canonical] = to_canonical

    complex_region_mappings_final = {}

    for (deprecated_region, replacements) in complex_region_mappings.items():
        # Find all likely subtag entries which don't already contain a region
        # subtag and whose target region is in the list of replacement regions.
        region_likely_subtags = [(from_language, from_script, to_region)
                                 for ((from_language, from_script, from_region),
                                      (_, _, to_region)) in likely_subtags.items()
                                 if from_region is None and to_region in replacements]

        # The first replacement entry is the default region.
        default = replacements[0]

        # Find all likely subtag entries whose region matches the default region.
        default_replacements = {(language, script)
                                for (language, script, region) in region_likely_subtags
                                if region == default}

        # And finally find those entries which don't use the default region.
        # These are the entries we're actually interested in, because those need
        # to be handled specially when selecting the correct preferred region.
        non_default_replacements = [(language, script, region)
                                    for (language, script, region) in region_likely_subtags
                                    if (language, script) not in default_replacements]

        # If there are no non-default replacements, we can handle the region as
        # part of the simple region mapping.
        if non_default_replacements:
            complex_region_mappings_final[deprecated_region] = (default, non_default_replacements)
        else:
            region_mappings[deprecated_region] = default

    return {"grandfatheredMappings": grandfathered_mappings,
            "languageMappings": language_mappings,
            "complexLanguageMappings": complex_language_mappings,
            "regionMappings": region_mappings,
            "complexRegionMappings": complex_region_mappings_final,
            "variantMappings": variant_mappings,
            }


def read_unicode_extensions(core_file):
    import xml.etree.ElementTree as ET

    # Match all xml-files in the BCP 47 directory.
    bcp_file_re = re.compile(r"^common/bcp47/.+\.xml$")

    # https://www.unicode.org/reports/tr35/#Unicode_locale_identifier
    #
    # type = alphanum{3,8} (sep alphanum{3,8})* ;
    type_re = re.compile(r"^[a-z0-9]{3,8}(-[a-z0-9]{3,8})*$")

    # Mapping from Unicode extension types to dict of deprecated to
    # preferred values.
    mapping = {
        # Unicode BCP 47 U Extension
        "u": {},

        # Unicode BCP 47 T Extension
        "t": {},
    }

    def read_bcp47_file(file):
        tree = ET.parse(file)
        for keyword in tree.iterfind(".//keyword/key"):
            extension = keyword.get("extension", "u")
            assert extension == "u" or extension == "t", (
                   "unknown extension type: {}".format(extension))

            extension_name = keyword.get("name")

            for type in keyword.iterfind("type"):
                # <https://unicode.org/reports/tr35/#Unicode_Locale_Extension_Data_Files>:
                #
                # The key or type name used by Unicode locale extension with 'u' extension
                # syntax or the 't' extensions syntax. When alias below is absent, this name
                # can be also used with the old style "@key=type" syntax.
                name = type.get("name")

                # Ignore the special name:
                # - <https://unicode.org/reports/tr35/#CODEPOINTS>
                # - <https://unicode.org/reports/tr35/#REORDER_CODE>
                # - <https://unicode.org/reports/tr35/#RG_KEY_VALUE>
                # - <https://unicode.org/reports/tr35/#SUBDIVISION_CODE>
                # - <https://unicode.org/reports/tr35/#PRIVATE_USE>
                if name in ("CODEPOINTS", "REORDER_CODE", "RG_KEY_VALUE", "SUBDIVISION_CODE",
                            "PRIVATE_USE"):
                    continue

                # All other names should match the 'type' production.
                assert type_re.match(name) is not None, (
                       "{} matches the 'type' production".format(name))

                # <https://unicode.org/reports/tr35/#Unicode_Locale_Extension_Data_Files>:
                #
                # The preferred value of the deprecated key, type or attribute element.
                # When a key, type or attribute element is deprecated, this attribute is
                # used for specifying a new canonical form if available.
                preferred = type.get("preferred")

                # <https://unicode.org/reports/tr35/#Unicode_Locale_Extension_Data_Files>:
                #
                # The BCP 47 form is the canonical form, and recommended. Other aliases are
                # included only for backwards compatibility.
                alias = type.get("alias")

                # <https://unicode.org/reports/tr35/#Canonical_Unicode_Locale_Identifiers>
                #
                # Use the bcp47 data to replace keys, types, tfields, and tvalues by their
                # canonical forms. See Section 3.6.4 U Extension Data Files) and Section
                # 3.7.1 T Extension Data Files. The aliases are in the alias attribute
                # value, while the canonical is in the name attribute value.

                # 'preferred' contains the new preferred name, 'alias' the compatibility
                # name, but then there's this entry where 'preferred' and 'alias' are the
                # same. So which one to choose? Assume 'preferred' is the actual canonical
                # name.
                #
                # <type name="islamicc"
                #       description="Civil (algorithmic) Arabic calendar"
                #       deprecated="true"
                #       preferred="islamic-civil"
                #       alias="islamic-civil"/>

                if preferred is not None:
                    assert type_re.match(preferred), preferred
                    mapping[extension].setdefault(extension_name, {})[name] = preferred

                if alias is not None:
                    for alias_name in alias.lower().split(" "):
                        # Ignore alias entries which don't match the 'type' production.
                        if type_re.match(alias_name) is None:
                            continue

                        # See comment above when 'alias' and 'preferred' are both present.
                        if (preferred is not None and
                            name in mapping[extension][extension_name]):
                            continue

                        # Skip over entries where 'name' and 'alias' are equal.
                        #
                        # <type name="pst8pdt"
                        #       description="POSIX style time zone for US Pacific Time"
                        #       alias="PST8PDT"
                        #       since="1.8"/>
                        if name == alias_name:
                            continue

                        mapping[extension].setdefault(extension_name, {})[alias_name] = name

    def read_supplemental_metadata(file):
        # Find subdivision and region replacements.
        #
        # <https://www.unicode.org/reports/tr35/#Canonical_Unicode_Locale_Identifiers>
        #
        # Replace aliases in special key values:
        #   - If there is an 'sd' or 'rg' key, replace any subdivision alias
        #     in its value in the same way, using subdivisionAlias data.
        tree = ET.parse(file)
        for alias in tree.iterfind(".//subdivisionAlias"):
            type = alias.get("type")
            assert type_re.match(type) is not None, (
                   "{} matches the 'type' production".format(type))

            # Take the first replacement when multiple ones are present.
            replacement = alias.get("replacement").split(" ")[0].lower()

            # Skip over invalid replacements.
            #
            # <subdivisionAlias type="fi01" replacement="AX" reason="overlong"/>
            #
            # It's not entirely clear to me if CLDR actually wants to use
            # "axzzzz" as the replacement for this case.
            if type_re.match(replacement) is None:
                continue

            # 'subdivisionAlias' applies to 'rg' and 'sd' keys.
            mapping["u"].setdefault("rg", {})[type] = replacement
            mapping["u"].setdefault("sd", {})[type] = replacement

    for name in core_file.namelist():
        if bcp_file_re.match(name):
            read_bcp47_file(core_file.open(name))

    read_supplemental_metadata(core_file.open("common/supplemental/supplementalMetadata.xml"))

    return {
        "unicodeMappings": mapping["u"],
        "transformMappings": mapping["t"],
    }


def write_simple_mappings(println, name, mappings):
    println(u"var {} = {{".format(name))

    for (key, value) in sorted(mappings.items(), key=itemgetter(0)):
        println(u"""  "{}": "{}",""".format(key, value))

    println(u"};")


def write_complex_language_mappings(println, mappings):
    println(u"var __complexLanguageMappings = {")

    def maybe_subtag(name, subtag):
        if subtag is None:
            return u""
        return u""", {}: "{}\"""".format(name, subtag)

    for (deprecated_language, (language, script, region)) in (
        sorted(mappings.items(), key=itemgetter(0))
    ):
        println(u"""  "{}": {{language: "{}"{}{}}},""".format(deprecated_language, language,
                                                              maybe_subtag("script", script),
                                                              maybe_subtag("region", region)))

    println(u"};")


def write_complex_region_mappings(println, mappings):
    println(u"var __complexRegionMappings = {")

    def maybe_subtag(name, subtag):
        if subtag is None:
            return u""
        return u"""{}: "{}", """.format(name, subtag)

    for (deprecated_region, (default, non_default_replacements)) in (
        sorted(mappings.items(), key=itemgetter(0))
    ):
        println(u"""  "{}": {{""".format(deprecated_region))
        println(u"""    default: "{}",""".format(default))

        for (language, script, region) in sorted(non_default_replacements, key=itemgetter(0, 1)):
            mapping_key = language
            if script is not None:
                mapping_key += "-" + script

            println(u"""    "{}": "{}",""".format(mapping_key, region))

        println(u"  },")

    println(u"};")


def write_variant_mappings(println, mappings):
    println(u"var __variantMappings = {")

    for (deprecated_variant, (type, replacement)) in sorted(mappings.items(), key=itemgetter(0)):
        println(u"""  "{}": {{type: "{}", replacement: "{}"}},""".format(deprecated_variant, type,
                                                                         replacement))

    println(u"};")


def write_unicode_extension_mappings(println, mapping, extension):
    println(u"var __{}Mappings = {{".format(extension))

    for (key, replacements) in sorted(mapping.items(), key=itemgetter(0)):
        println(u"""  "{}": {{""".format(key))

        for (type, replacement) in sorted(replacements.items(), key=itemgetter(0)):
            println(u"""    "{}": "{}",""".format(type, replacement))
        println(u"  },")

    println(u"};")


def write_cldr_language_tag_data(println, data, url):
    language_mappings = data["languageMappings"]
    complex_language_mappings = data["complexLanguageMappings"]
    region_mappings = data["regionMappings"]
    complex_region_mappings = data["complexRegionMappings"]
    variant_mappings = data["variantMappings"]
    unicode_mappings = data["unicodeMappings"]
    transform_mappings = data["transformMappings"]

    write_simple_mappings(println, "__languageMappings", language_mappings)
    write_simple_mappings(println, "__regionMappings", region_mappings)

    write_complex_language_mappings(println, complex_language_mappings)
    write_complex_region_mappings(println, complex_region_mappings)

    write_variant_mappings(println, variant_mappings)

    write_unicode_extension_mappings(println, unicode_mappings, "unicode")
    write_unicode_extension_mappings(println, transform_mappings, "transform")


def update_cldr_lang_tags(args):
    """ Generate the language tag mapping objects. """
    version = args.version
    url = args.url
    out = args.out
    filename = args.file

    url = url.replace("<VERSION>", version)

    print("Arguments:")
    print("\tCLDR version: %s" % version)
    print("\tDownload url: %s" % url)
    if filename is not None:
        print("\tLocal CLDR core.zip file: %s" % filename)
    print("\tOutput file: %s" % out)
    print("")

    data = {
        "version": version,
    }

    def read_files(cldr_file):
        with ZipFile(cldr_file) as zip_file:
            data.update(read_supplemental_data(zip_file))
            data.update(read_unicode_extensions(zip_file))

    print("Processing CLDR data...")
    if filename is not None:
        print("Always make sure you have the newest CLDR core.zip!")
        with open(filename, "rb") as cldr_file:
            read_files(cldr_file)
    else:
        print("Downloading CLDR core.zip...")
        with closing(urlopen(url)) as cldr_file:
            cldr_data = io.BytesIO(cldr_file.read())
            read_files(cldr_data)

    print("Writing Intl data...")
    if out == "stdout":
        out = sys.stdout.fileno()
    with io.open(out, mode="w", encoding="utf-8", newline="") as f:
        println = partial(print, file=f)

        write_cldr_language_tag_data(println, data, url)


if __name__ == "__main__":
    import argparse

    def ensure_https(v):
        if not v.startswith("https:"):
            raise argparse.ArgumentTypeError("URL protocol must be https: " % v)
        return v

    parser = argparse.ArgumentParser(description="Update CLDR language tags data.")

    parser.add_argument("--version",
                        metavar="VERSION",
                        required=True,
                        help="CLDR version number")
    parser.add_argument("--url",
                        metavar="URL",
                        default="https://unicode.org/Public/cldr/<VERSION>/core.zip",
                        type=ensure_https,
                        help="Download url CLDR data (default: %(default)s)")
    parser.add_argument("--out",
                        default="stdout",
                        help="Output file (default: %(default)s)")
    parser.add_argument("file",
                        nargs="?",
                        help="Local cldr-core.zip file, if omitted uses <URL>")
    parser.set_defaults(func=update_cldr_lang_tags)

    args = parser.parse_args()
    args.func(args)
