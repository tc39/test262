// Copyright 2011-2012 Norbert Lindenberg. All rights reserved.
// Copyright 2012  Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * This file contains shared functions for the tests in the conformance test
 * suite for the ECMAScript Internationalization API.
 * @author Norbert Lindenberg
 */


/**
 * @description Calls the provided function for every service constructor in
 * the Intl object, until f returns a falsy value. It returns the result of the
 * last call to f, mapped to a boolean.
 * @param {Function} f the function to call for each service constructor in
 *     the Intl object.
 *     @param {Function} Constructor the constructor object to test with.
 * @result {Boolean} whether the test succeeded.
 */
function testWithIntlConstructors(f) {
    var constructors = ["Collator", "NumberFormat", "DateTimeFormat"];
    return constructors.every(function (constructor) {
        var Constructor = Intl[constructor];
        var result;
        try {
            result = f(Constructor);
        } catch (e) {
            e.message += " (Testing with " + constructor + ".)";
            throw e;
        }
        return result;
    });
}


/**
 * Returns the name of the given constructor object, which must be one of
 * Intl.Collator, Intl.NumberFormat, or Intl.DateTimeFormat.
 * @param {object} Constructor a constructor
 * @return {string} the name of the constructor
 */
function getConstructorName(Constructor) {
    switch (Constructor) {
        case Intl.Collator:
            return "Collator";
        case Intl.NumberFormat:
            return "NumberFormat";
        case Intl.DateTimeFormat:
            return "DateTimeFormat";
        default:
            $ERROR("test internal error: unknown Constructor");
    }
}


/**
 * Taints a named data property of the given object by installing
 * a setter that throws an exception.
 * @param {object} obj the object whose data property to taint
 * @param {string} property the property to taint
 */
function taintDataProperty(obj, property) {
    Object.defineProperty(obj, property, {
        set: function(value) {
            $ERROR("Client code can adversely affect behavior: setter for " + property + ".");
        },
        enumerable: false,
        configurable: true
    });
}


/**
 * Taints a named method of the given object by replacing it with a function
 * that throws an exception.
 * @param {object} obj the object whose method to taint
 * @param {string} property the name of the method to taint
 */
function taintMethod(obj, property) {
    Object.defineProperty(obj, property, {
        value: function() {
            $ERROR("Client code can adversely affect behavior: method " + property + ".");
        },
        writable: true,
        enumerable: false,
        configurable: true
    });
}


/**
 * Taints the given properties (and similarly named properties) by installing
 * setters on Object.prototype that throw exceptions.
 * @param {Array} properties an array of property names to taint
 */
function taintProperties(properties) {
    properties.forEach(function (property) {
        var adaptedProperties = [property, "__" + property, "_" + property, property + "_", property + "__"];
        adaptedProperties.forEach(function (property) {
            taintDataProperty(Object.prototype, property);
        });
    });
}


/**
 * Taints the Array object by creating a setter for the property "0" and
 * replacing some key methods with functions that throw exceptions.
 */
function taintArray() {
    taintDataProperty(Array.prototype, "0");
    taintMethod(Array.prototype, "indexOf");
    taintMethod(Array.prototype, "join");
    taintMethod(Array.prototype, "push");
    taintMethod(Array.prototype, "slice");
    taintMethod(Array.prototype, "sort");
}


// auxiliary data for getLocaleSupportInfo
var languages = ["zh", "es", "en", "hi", "ur", "ar", "ja", "pa"];
var scripts = ["Latn", "Hans", "Deva", "Arab", "Jpan", "Hant"];
var countries = ["CN", "IN", "US", "PK", "JP", "TW", "HK", "SG"];
var localeSupportInfo = {};


/**
 * Gets locale support info for the given constructor object, which must be one
 * of Intl.Collator, Intl.NumberFormat, Intl.DateTimeFormat.
 * @param {object} Constructor the constructor for which to get locale support info
 * @return {object} locale support info with the following properties:
 *     supported: array of fully supported language tags
 *     byFallback: array of language tags that are supported through fallbacks
 *     unsupported: array of unsupported language tags
 */
function getLocaleSupportInfo(Constructor) {
    var constructorName = getConstructorName(Constructor);
    if (localeSupportInfo[constructorName] !== undefined) {
        return localeSupportInfo[constructorName];
    }

    var allTags = [];
    var i, j, k;
    var language, script, country;
    for (i = 0; i < languages.length; i++) {
        language = languages[i];
        allTags.push(language);
        for (j = 0; j < scripts.length; j++) {
            script = scripts[j];
            allTags.push(language + "-" + script);
            for (k = 0; k < countries.length; k++) {
                country = countries[k];
                allTags.push(language + "-" + script + "-" + country);
            }
        }
        for (k = 0; k < countries.length; k++) {
            country = countries[k];
            allTags.push(language + "-" + country);
        }
    }
    
    var supported = [];
    var byFallback = [];
    var unsupported = [];
    for (i = 0; i < allTags.length; i++) {
        var request = allTags[i];
        var result = new Constructor([request], {localeMatcher: "lookup"}).resolvedOptions().locale;
         if (request === result) {
            supported.push(request);
        } else if (request.indexOf(result) === 0) {
            byFallback.push(request);
        } else {
            unsupported.push(request);
        }
    }
    
    localeSupportInfo[constructorName] = {
        supported: supported,
        byFallback: byFallback,
        unsupported: unsupported
    };
    
    return localeSupportInfo[constructorName];
}
        

/**
 * @description Tests whether locale is a String value representing a
 * structurally valid and canonicalized BCP 47 language tag, as defined in
 * sections 6.2.2 and 6.2.3 of the ECMAScript Internationalization API
 * Specification.
 * @param {String} locale the string to be tested.
 * @result {Boolean} whether the test succeeded.
 */
function isCanonicalizedStructurallyValidLanguageTag(locale) {

    /**
     * Regular expression defining BCP 47 language tags.
     *
     * Spec: RFC 5646 section 2.1.
     */
    var alpha = "[a-zA-Z]",
        digit = "[0-9]",
        alphanum = "(" + alpha + "|" + digit + ")",
        regular = "(art-lojban|cel-gaulish|no-bok|no-nyn|zh-guoyu|zh-hakka|zh-min|zh-min-nan|zh-xiang)",
        irregular = "(en-GB-oed|i-ami|i-bnn|i-default|i-enochian|i-hak|i-klingon|i-lux|i-mingo|i-navajo|i-pwn|i-tao|i-tay|i-tsu|sgn-BE-FR|sgn-BE-NL|sgn-CH-DE)",
        grandfathered = "(" + irregular + "|" + regular + ")",
        privateuse = "(x(-[a-z0-9]{1,8})+)",
        singleton = "(" + digit + "|[A-WY-Za-wy-z])",
        extension = "(" + singleton + "(-" + alphanum + "{2,8})+)",
        variant = "(" + alphanum + "{5,8}|(" + digit + alphanum + "{3}))",
        region = "(" + alpha + "{2}|" + digit + "{3})",
        script = "(" + alpha + "{4})",
        extlang = "(" + alpha + "{3}(-" + alpha + "{3}){0,2})",
        language = "(" + alpha + "{2,3}(-" + extlang + ")?|" + alpha + "{4}|" + alpha + "{5,8})",
        langtag = language + "(-" + script + ")?(-" + region + ")?(-" + variant + ")*(-" + extension + ")*(-" + privateuse + ")?",
        languageTag = "^(" + langtag + "|" + privateuse + "|" + grandfathered + ")$",
        languageTagRE = new RegExp(languageTag, "i");
    var duplicateSingleton = "-" + singleton + "-(.*-)?\\1(?!" + alphanum + ")",
        duplicateSingletonRE = new RegExp(duplicateSingleton, "i"),
        duplicateVariant = "(" + alphanum + "{2,8}-)+" + variant + "-(" + alphanum + "{2,8}-)*\\3(?!" + alphanum + ")",
        duplicateVariantRE = new RegExp(duplicateVariant, "i");


    /**
     * Verifies that the given string is a well-formed BCP 47 language tag
     * with no duplicate variant or singleton subtags.
     *
     * Spec: ECMAScript Internationalization API Specification, draft, 6.2.2.
     */
    function isStructurallyValidLanguageTag(locale) {
        if (!languageTagRE.test(locale)) {
            return false;
        }
        locale = locale.split(/-x-/)[0];
        return !duplicateSingletonRE.test(locale) && !duplicateVariantRE.test(locale);
    }


    /**
     * Mappings from complete tags to preferred values.
     *
     * Spec: IANA Language Subtag Registry.
     */
    var __tagMappings = {
        // property names must be in lower case; values in canonical form

        // grandfathered tags from IANA language subtag registry, file date 2011-08-25
        "art-lojban": "jbo",
        "cel-gaulish": "cel-gaulish",
        "en-gb-oed": "en-GB-oed",
        "i-ami": "ami",
        "i-bnn": "bnn",
        "i-default": "i-default",
        "i-enochian": "i-enochian",
        "i-hak": "hak",
        "i-klingon": "tlh",
        "i-lux": "lb",
        "i-mingo": "i-mingo",
        "i-navajo": "nv",
        "i-pwn": "pwn",
        "i-tao": "tao",
        "i-tay": "tay",
        "i-tsu": "tsu",
        "no-bok": "nb",
        "no-nyn": "nn",
        "sgn-be-fr": "sfb",
        "sgn-be-nl": "vgt",
        "sgn-ch-de": "sgg",
        "zh-guoyu": "cmn",
        "zh-hakka": "hak",
        "zh-min": "zh-min",
        "zh-min-nan": "nan",
        "zh-xiang": "hsn",
        // deprecated redundant tags from IANA language subtag registry, file date 2011-08-25
        "sgn-br": "bzs",
        "sgn-co": "csn",
        "sgn-de": "gsg",
        "sgn-dk": "dsl",
        "sgn-es": "ssp",
        "sgn-fr": "fsl",
        "sgn-gb": "bfi",
        "sgn-gr": "gss",
        "sgn-ie": "isg",
        "sgn-it": "ise",
        "sgn-jp": "jsl",
        "sgn-mx": "mfs",
        "sgn-ni": "ncs",
        "sgn-nl": "dse",
        "sgn-no": "nsl",
        "sgn-pt": "psr",
        "sgn-se": "swl",
        "sgn-us": "ase",
        "sgn-za": "sfs",
        "zh-cmn": "cmn",
        "zh-cmn-hans": "cmn-Hans",
        "zh-cmn-hant": "cmn-Hant",
        "zh-gan": "gan",
        "zh-wuu": "wuu",
        "zh-yue": "yue",
        // deprecated variant with prefix from IANA language subtag registry, file date 2011-08-25
        "ja-latn-hepburn-heploc": "ja-Latn-alalc97"
    };


    /**
     * Mappings from non-extlang subtags to preferred values.
     *
     * Spec: IANA Language Subtag Registry.
     */
    var __subtagMappings = {
        // property names and values must be in canonical case
        // language subtags with Preferred-Value mappings from IANA language subtag registry, file date 2011-08-25
        "in": "id",
        "iw": "he",
        "ji": "yi",
        "jw": "jv",
        "mo": "ro",
        "ayx": "nun",
        "cjr": "mom",
        "cmk": "xch",
        "drh": "khk",
        "drw": "prs",
        "gav": "dev",
        "mst": "mry",
        "myt": "mry",
        "tie": "ras",
        "tkk": "twm",
        "tnf": "prs",
        // region subtags with Preferred-Value mappings from IANA language subtag registry, file date 2011-08-25
        "BU": "MM",
        "DD": "DE",
        "FX": "FR",
        "TP": "TL",
        "YD": "YE",
        "ZR": "CD"
    };


    /**
     * Mappings from extlang subtags to preferred values.
     *
     * Spec: IANA Language Subtag Registry.
     */
    var __extlangMappings = {
        // extlang subtags with Preferred-Value mappings from IANA language subtag registry, file date 2011-08-25
        // values are arrays with [0] the replacement value, [1] (if present) the prefix to be removed
        "aao": ["aao", "ar"],
        "abh": ["abh", "ar"],
        "abv": ["abv", "ar"],
        "acm": ["acm", "ar"],
        "acq": ["acq", "ar"],
        "acw": ["acw", "ar"],
        "acx": ["acx", "ar"],
        "acy": ["acy", "ar"],
        "adf": ["adf", "ar"],
        "ads": ["ads", "sgn"],
        "aeb": ["aeb", "ar"],
        "aec": ["aec", "ar"],
        "aed": ["aed", "sgn"],
        "aen": ["aen", "sgn"],
        "afb": ["afb", "ar"],
        "afg": ["afg", "sgn"],
        "ajp": ["ajp", "ar"],
        "apc": ["apc", "ar"],
        "apd": ["apd", "ar"],
        "arb": ["arb", "ar"],
        "arq": ["arq", "ar"],
        "ars": ["ars", "ar"],
        "ary": ["ary", "ar"],
        "arz": ["arz", "ar"],
        "ase": ["ase", "sgn"],
        "asf": ["asf", "sgn"],
        "asp": ["asp", "sgn"],
        "asq": ["asq", "sgn"],
        "asw": ["asw", "sgn"],
        "auz": ["auz", "ar"],
        "avl": ["avl", "ar"],
        "ayh": ["ayh", "ar"],
        "ayl": ["ayl", "ar"],
        "ayn": ["ayn", "ar"],
        "ayp": ["ayp", "ar"],
        "bbz": ["bbz", "ar"],
        "bfi": ["bfi", "sgn"],
        "bfk": ["bfk", "sgn"],
        "bjn": ["bjn", "ms"],
        "bog": ["bog", "sgn"],
        "bqn": ["bqn", "sgn"],
        "bqy": ["bqy", "sgn"],
        "btj": ["btj", "ms"],
        "bve": ["bve", "ms"],
        "bvl": ["bvl", "sgn"],
        "bvu": ["bvu", "ms"],
        "bzs": ["bzs", "sgn"],
        "cdo": ["cdo", "zh"],
        "cds": ["cds", "sgn"],
        "cjy": ["cjy", "zh"],
        "cmn": ["cmn", "zh"],
        "coa": ["coa", "ms"],
        "cpx": ["cpx", "zh"],
        "csc": ["csc", "sgn"],
        "csd": ["csd", "sgn"],
        "cse": ["cse", "sgn"],
        "csf": ["csf", "sgn"],
        "csg": ["csg", "sgn"],
        "csl": ["csl", "sgn"],
        "csn": ["csn", "sgn"],
        "csq": ["csq", "sgn"],
        "csr": ["csr", "sgn"],
        "czh": ["czh", "zh"],
        "czo": ["czo", "zh"],
        "doq": ["doq", "sgn"],
        "dse": ["dse", "sgn"],
        "dsl": ["dsl", "sgn"],
        "dup": ["dup", "ms"],
        "ecs": ["ecs", "sgn"],
        "esl": ["esl", "sgn"],
        "esn": ["esn", "sgn"],
        "eso": ["eso", "sgn"],
        "eth": ["eth", "sgn"],
        "fcs": ["fcs", "sgn"],
        "fse": ["fse", "sgn"],
        "fsl": ["fsl", "sgn"],
        "fss": ["fss", "sgn"],
        "gan": ["gan", "zh"],
        "gom": ["gom", "kok"],
        "gse": ["gse", "sgn"],
        "gsg": ["gsg", "sgn"],
        "gsm": ["gsm", "sgn"],
        "gss": ["gss", "sgn"],
        "gus": ["gus", "sgn"],
        "hab": ["hab", "sgn"],
        "haf": ["haf", "sgn"],
        "hak": ["hak", "zh"],
        "hds": ["hds", "sgn"],
        "hji": ["hji", "ms"],
        "hks": ["hks", "sgn"],
        "hos": ["hos", "sgn"],
        "hps": ["hps", "sgn"],
        "hsh": ["hsh", "sgn"],
        "hsl": ["hsl", "sgn"],
        "hsn": ["hsn", "zh"],
        "icl": ["icl", "sgn"],
        "ils": ["ils", "sgn"],
        "inl": ["inl", "sgn"],
        "ins": ["ins", "sgn"],
        "ise": ["ise", "sgn"],
        "isg": ["isg", "sgn"],
        "isr": ["isr", "sgn"],
        "jak": ["jak", "ms"],
        "jax": ["jax", "ms"],
        "jcs": ["jcs", "sgn"],
        "jhs": ["jhs", "sgn"],
        "jls": ["jls", "sgn"],
        "jos": ["jos", "sgn"],
        "jsl": ["jsl", "sgn"],
        "jus": ["jus", "sgn"],
        "kgi": ["kgi", "sgn"],
        "knn": ["knn", "kok"],
        "kvb": ["kvb", "ms"],
        "kvk": ["kvk", "sgn"],
        "kvr": ["kvr", "ms"],
        "kxd": ["kxd", "ms"],
        "lbs": ["lbs", "sgn"],
        "lce": ["lce", "ms"],
        "lcf": ["lcf", "ms"],
        "liw": ["liw", "ms"],
        "lls": ["lls", "sgn"],
        "lsg": ["lsg", "sgn"],
        "lsl": ["lsl", "sgn"],
        "lso": ["lso", "sgn"],
        "lsp": ["lsp", "sgn"],
        "lst": ["lst", "sgn"],
        "lsy": ["lsy", "sgn"],
        "ltg": ["ltg", "lv"],
        "lvs": ["lvs", "lv"],
        "lzh": ["lzh", "zh"],
        "max": ["max", "ms"],
        "mdl": ["mdl", "sgn"],
        "meo": ["meo", "ms"],
        "mfa": ["mfa", "ms"],
        "mfb": ["mfb", "ms"],
        "mfs": ["mfs", "sgn"],
        "min": ["min", "ms"],
        "mnp": ["mnp", "zh"],
        "mqg": ["mqg", "ms"],
        "mre": ["mre", "sgn"],
        "msd": ["msd", "sgn"],
        "msi": ["msi", "ms"],
        "msr": ["msr", "sgn"],
        "mui": ["mui", "ms"],
        "mzc": ["mzc", "sgn"],
        "mzg": ["mzg", "sgn"],
        "mzy": ["mzy", "sgn"],
        "nan": ["nan", "zh"],
        "nbs": ["nbs", "sgn"],
        "ncs": ["ncs", "sgn"],
        "nsi": ["nsi", "sgn"],
        "nsl": ["nsl", "sgn"],
        "nsp": ["nsp", "sgn"],
        "nsr": ["nsr", "sgn"],
        "nzs": ["nzs", "sgn"],
        "okl": ["okl", "sgn"],
        "orn": ["orn", "ms"],
        "ors": ["ors", "ms"],
        "pel": ["pel", "ms"],
        "pga": ["pga", "ar"],
        "pks": ["pks", "sgn"],
        "prl": ["prl", "sgn"],
        "prz": ["prz", "sgn"],
        "psc": ["psc", "sgn"],
        "psd": ["psd", "sgn"],
        "pse": ["pse", "ms"],
        "psg": ["psg", "sgn"],
        "psl": ["psl", "sgn"],
        "pso": ["pso", "sgn"],
        "psp": ["psp", "sgn"],
        "psr": ["psr", "sgn"],
        "pys": ["pys", "sgn"],
        "rms": ["rms", "sgn"],
        "rsi": ["rsi", "sgn"],
        "rsl": ["rsl", "sgn"],
        "sdl": ["sdl", "sgn"],
        "sfb": ["sfb", "sgn"],
        "sfs": ["sfs", "sgn"],
        "sgg": ["sgg", "sgn"],
        "sgx": ["sgx", "sgn"],
        "shu": ["shu", "ar"],
        "slf": ["slf", "sgn"],
        "sls": ["sls", "sgn"],
        "sqs": ["sqs", "sgn"],
        "ssh": ["ssh", "ar"],
        "ssp": ["ssp", "sgn"],
        "ssr": ["ssr", "sgn"],
        "svk": ["svk", "sgn"],
        "swc": ["swc", "sw"],
        "swh": ["swh", "sw"],
        "swl": ["swl", "sgn"],
        "syy": ["syy", "sgn"],
        "tmw": ["tmw", "ms"],
        "tse": ["tse", "sgn"],
        "tsm": ["tsm", "sgn"],
        "tsq": ["tsq", "sgn"],
        "tss": ["tss", "sgn"],
        "tsy": ["tsy", "sgn"],
        "tza": ["tza", "sgn"],
        "ugn": ["ugn", "sgn"],
        "ugy": ["ugy", "sgn"],
        "ukl": ["ukl", "sgn"],
        "uks": ["uks", "sgn"],
        "urk": ["urk", "ms"],
        "uzn": ["uzn", "uz"],
        "uzs": ["uzs", "uz"],
        "vgt": ["vgt", "sgn"],
        "vkk": ["vkk", "ms"],
        "vkt": ["vkt", "ms"],
        "vsi": ["vsi", "sgn"],
        "vsl": ["vsl", "sgn"],
        "vsv": ["vsv", "sgn"],
        "wuu": ["wuu", "zh"],
        "xki": ["xki", "sgn"],
        "xml": ["xml", "sgn"],
        "xmm": ["xmm", "ms"],
        "xms": ["xms", "sgn"],
        "yds": ["yds", "sgn"],
        "ysl": ["ysl", "sgn"],
        "yue": ["yue", "zh"],
        "zib": ["zib", "sgn"],
        "zlm": ["zlm", "ms"],
        "zmi": ["zmi", "ms"],
        "zsl": ["zsl", "sgn"],
        "zsm": ["zsm", "ms"]
    };


    /**
     * Canonicalizes the given well-formed BCP 47 language tag, including regularized case of subtags.
     *
     * Spec: ECMAScript Internationalization API Specification, draft, 6.2.3.
     * Spec: RFC 5646, section 4.5.
     */
    function canonicalizeLanguageTag(locale) {

        // start with lower case for easier processing, and because most subtags will need to be lower case anyway
        locale = locale.toLowerCase();

        // handle mappings for complete tags
        if (__tagMappings.hasOwnProperty(locale)) {
            return __tagMappings[locale];
        }

        var subtags = locale.split("-");
        var i = 0;

        // handle standard part: all subtags before first singleton or "x"
        while (i < subtags.length) {
            var subtag = subtags[i];
            if (subtag.length === 1 && (i > 0 || subtag === "x")) {
                break;
            } else if (i !== 0 && subtag.length === 2) {
                subtag = subtag.toUpperCase();
            } else if (subtag.length === 4) {
                subtag = subtag[0].toUpperCase() + subtag.substring(1).toLowerCase();
            }
            if (__subtagMappings.hasOwnProperty(subtag)) {
                subtag = __subtagMappings[subtag];
            } else if (__extlangMappings.hasOwnProperty(subtag)) {
                subtag = __extlangMappings[subtag][0];
                if (i === 1 && __extlangMappings[subtag][1] === subtags[0]) {
                    subtags.shift();
                    i--;
                }
            }
            subtags[i] = subtag;
            i++;
        }
        var normal = subtags.slice(0, i).join("-");

        // handle extensions
        var extensions = [];
        while (i < subtags.length && subtags[i] !== "x") {
            var extensionStart = i;
            i++;
            while (i < subtags.length && subtags[i].length > 1) {
                i++;
            }
            var extension = subtags.slice(extensionStart, i).join("-");
            extensions.push(extension);
        }
        extensions.sort();

        // handle private use
        var privateUse;
        if (i < subtags.length) {
            privateUse = subtags.slice(i).join("-");
        }

        // put everything back together
        var canonical = normal;
        if (extensions.length > 0) {
            canonical += "-" + extensions.join("-");
        }
        if (privateUse !== undefined) {
            if (canonical.length > 0) {
                canonical += "-" + privateUse;
            } else {
                canonical = privateUse;
            }
        }

        return canonical;
    }

    return typeof locale === "string" && isStructurallyValidLanguageTag(locale) &&
            canonicalizeLanguageTag(locale) === locale;
}

