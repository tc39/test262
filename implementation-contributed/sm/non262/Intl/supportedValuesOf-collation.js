// Copyright (C) 2024 Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
includes:
- compareArray.js
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
const collations = Intl.supportedValuesOf("collation");

assert.sameValue(new Set(collations).size, collations.length, "No duplicates are present");
assert.compareArray(collations, [...collations].sort(), "The list is sorted");

const typeRE = /^[a-z0-9]{3,8}(-[a-z0-9]{3,8})*$/;
for (let collation of collations) {
  assert.sameValue(typeRE.test(collation), true, `${collation} matches the 'type' production`);
}

for (let collation of collations) {
  assert.sameValue(new Intl.Locale("und", {collation}).collation, collation, `${collation} is canonicalised`);
}

// Not all locales support all possible collations, so test the minimal set to
// cover all supported collations.
const locales = [
  "en", // "emoji", "eor"
  "ar", // compat
  "de", // phonebk
  "es", // trad
  "ko", // searchjl
  "ln", // phonetic
  "si", // dict
  "sv", // reformed
  "zh", // big5han, gb2312, pinyin, stroke, unihan, zhuyin
];

for (let collation of collations) {
  let supported = false;
  for (let locale of locales) {
    let obj = new Intl.Collator(locale, {collation});
    if (obj.resolvedOptions().collation === collation) {
      supported = true;
    }
  }

  assert.sameValue(supported, true, `${collation} is supported by Collator`);
}

