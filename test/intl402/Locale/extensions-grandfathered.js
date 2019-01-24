// Copyright 2018 André Bargull; Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-intl.locale
description: >
    Verifies handling of options with grandfathered tags.
info: |
    ApplyOptionsToTag( tag, options )

    ...
    9. Set tag to CanonicalizeLanguageTag(tag).

    CanonicalizeLanguageTag( tag )

    The CanonicalizeLanguageTag abstract operation returns the canonical and
    case-regularized form of the locale argument (which must be a String value
    that is a structurally valid Unicode BCP 47 Locale Identifier as verified by
    the IsStructurallyValidLanguageTag abstract operation).

    IsStructurallyValidLanguageTag ( locale )

    The IsStructurallyValidLanguageTag abstract operation verifies that the
    locale argument (which must be a String value)

    represents a well-formed Unicode BCP 47 Locale Identifier" as specified in
    Unicode Technical Standard 35 section 3.2, or successor,

features: [Intl.Locale]
---*/

const testData = [
    // Regular grandfathered without modern replacement.
    {
        tag: "cel-gaulish",
        options: {
            language: "fr",
            script: "Cyrl",
            region: "FR",
            numberingSystem: "latn",
        },
        canonical: "fr-Cyrl-FR-u-nu-latn",
    },

    // Regular grandfathered with modern replacement.
    {
        tag: "art-lojban",
        options: {
            language: "fr",
            script: "Cyrl",
            region: "ZZ",
            numberingSystem: "latn",
        },
        canonical: "fr-Cyrl-ZZ-u-nu-latn",
    },
];

for (const {tag, options, canonical} of testData) {
    const loc = new Intl.Locale(tag, options);
    assert.sameValue(loc.toString(), canonical);

    for (const [name, value] of Object.entries(options)) {
        assert.sameValue(loc[name], value);
    }
}

assert.throws(RangeError, () =>
    new Intl.Locale("i-default",
      {language: "fr", script: "Cyrl", region: "DE", numberingSystem: "latn"}
      ).toString());

assert.throws(RangeError, () =>
    new Intl.Locale("en-gb-oed",
      {language: "fr", script: "Cyrl", region: "US", numberingSystem: "latn"}
      ).toString());
