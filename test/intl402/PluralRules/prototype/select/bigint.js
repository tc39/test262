// Copyright 2026 André Bargull. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
esid: sec-intl.pluralrules.prototype.select
description: >
  Call select() with a BigInt argument
info: |
  Intl.PluralRules.prototype.select ( value )
    ...
    3. Let n be ? ToIntlMathematicalValue(value).
    4. Return ResolvePlural(pr, n).[[PluralCategory]].
locale: [en, fr, pl, zh]
---*/

// Sample locales with different allowed plural categories.
//
// https://github.com/unicode-org/cldr/blob/main/common/supplemental/plurals.xml
const locales = [
  // Categories: one, other
  "en",

  // Categories: one, many, other
  "fr",

  // Categories:one, few, many, other
  "pl",

  // Categories: other
  "zh",
];

// Sample numbers which resolve to the plural categories noted above.
const numbers = [
  0, 1, 2, 3, 4, 5, 10, 100, 1e3, 1e4, 1e5, 1e6,
];

for (let locale of locales) {
  let pl = new Intl.PluralRules(locale);

  for (let number of numbers) {
    assert.sameValue(
      pl.select(BigInt(number)),
      pl.select(number),
      `${locale}: ${number} as a BigInt resolves to the same category`
    );
  }
}
