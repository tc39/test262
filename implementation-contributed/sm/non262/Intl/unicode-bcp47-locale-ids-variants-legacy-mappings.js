// Copyright (C) 2024 Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
includes:
- non262-Intl-shell.js
- non262-shell.js
- shell.js
flags:
- noStrict
features:
- Intl
description: |
  pending
esid: pending
---*/
// ECMA-402 includes mapping of legacy variants, as long as they're also present
// in <variantAlias> in CLDR's supplementalMetadata.xml
// <https://www.unicode.org/reports/tr35/#Legacy_Variants>

assert.sameValue(Intl.getCanonicalLocales("sv-AALAND")[0], "sv-AX");
assert.sameValue(Intl.getCanonicalLocales("no-BOKMAL")[0], "nb");
assert.sameValue(Intl.getCanonicalLocales("no-NYNORSK")[0], "nn");
assert.sameValue(Intl.getCanonicalLocales("en-POSIX")[0], "en-posix");
assert.sameValue(Intl.getCanonicalLocales("el-POLYTONI")[0], "el-polyton");
assert.sameValue(Intl.getCanonicalLocales("aa-SAAHO")[0], "ssy");

// Additional cases from CLDR, version 38.

assert.sameValue(Intl.getCanonicalLocales("aar-saaho")[0], "ssy");
assert.sameValue(Intl.getCanonicalLocales("arm-arevmda")[0], "hyw");
assert.sameValue(Intl.getCanonicalLocales("hy-arevmda")[0], "hyw");
assert.sameValue(Intl.getCanonicalLocales("hye-arevmda")[0], "hyw");

for (let language of ["chi", "cmn", "zh", "zho"]) {
    assert.sameValue(Intl.getCanonicalLocales(language)[0], "zh");

    let mapping = {
        "guoyu-hakka": "hak",
        "guoyu-xiang": "hsn",
        "guoyu": "zh",
        "hakka": "hak",
        "xiang": "hsn",
    };
    for (let [variant, canonical] of Object.entries(mapping)) {
        assert.sameValue(Intl.getCanonicalLocales(`${language}-${variant}`)[0], canonical);
    }
}

// Most legacy variant subtags are simply removed in contexts they don't apply.
for (let variant of ["arevela", "arevmda", "bokmal", "hakka", "lojban", "nynorsk", "saaho", "xiang"]) {
    assert.sameValue(Intl.getCanonicalLocales(`en-${variant}`)[0], "en");
}

// Except these three, whose replacement is always applied.
assert.sameValue(Intl.getCanonicalLocales("en-aaland")[0], "en-AX");
assert.sameValue(Intl.getCanonicalLocales("en-heploc")[0], "en-alalc97");
assert.sameValue(Intl.getCanonicalLocales("en-polytoni")[0], "en-polyton");

