// Copyright 2026 André Bargull. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
esid: sec-intl.pluralrules.prototype.selectrange
description: >
  Call selectRange() with String arguments
info: |
  Intl.PluralRules.prototype.selectRange ( start, end )
    ...
    4. Let x be ? ToIntlMathematicalValue(start).
    5. Let y be ? ToIntlMathematicalValue(end).
    6. Return ? ResolvePluralRange(pr, x, y).
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

  for (let start of numbers) {
    for (let end of numbers) {
      let expected = pl.selectRange(start, end);

      // Including non-decimal representation of start.
      for (let n of [
        `${start}`,
        `0b${start.toString(2)}`,
        `0B${start.toString(2)}`,
        `0o${start.toString(8)}`,
        `0O${start.toString(8)}`,
        `0x${start.toString(16)}`,
        `0X${start.toString(16)}`,
      ]) {
        assert.sameValue(
          pl.selectRange(n, String(end)),
          expected,
          `${locale}: ${start} - ${end} as the Strings "${n}" and "${end}" resolve to the same category`
        );
      }
    }
  }
}
