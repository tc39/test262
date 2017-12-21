// Copyright 2012 Mozilla Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
es5id: 10.3.3
description: >
    Tests that the object returned by
    Intl.Collator.prototype.resolvedOptions  has the right properties.
author: Norbert Lindenberg
includes: [testIntl.js, propertyHelper.js]
---*/

var actual = new Intl.Collator().resolvedOptions();

var actual2 = new Intl.Collator().resolvedOptions();
assert.notSameValue(actual2, actual, "resolvedOptions returned the same object twice.");

// source: CLDR file common/bcp47/collation.xml; version CLDR 21.
var collations = [
    "default", // added
    "big5han", 
    "dict",
    "direct",
    "ducet",
    "gb2312",
    "phonebk",
    "phonetic",
    "pinyin",
    "reformed",
    // "search", // excluded
    "searchjl",
    // "standard", // excluded
    "stroke",
    "trad",
    "unihan"
];

// this assumes the default values where the specification provides them
mustHaveProperty(actual, "locale", isCanonicalizedStructurallyValidLanguageTag);
mustHaveProperty(actual, "usage", ["sort"]);
mustHaveProperty(actual, "sensitivity", ["variant"]);
mustHaveProperty(actual, "ignorePunctuation", [false]);
mustHaveProperty(actual, "collation", collations);

// "numeric" is an optional property.
if (actual.hasOwnProperty("numeric")) {
    assert.notSameValue([true, false].indexOf(actual.numeric), -1);
    verifyProperty(actual, "numeric", {writable: true, enumerable: true, configurable: true});
}

// "caseFirst" is an optional property.
if (actual.hasOwnProperty("caseFirst")) {
    assert.notSameValue(["upper", "lower", "false"].indexOf(actual.caseFirst), -1);
    verifyProperty(actual, "caseFirst", {writable: true, enumerable: true, configurable: true});
}
