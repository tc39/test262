// Copyright 2026 André Bargull. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
esid: sec-intl.pluralrules.prototype.select
description: >
  Call select() with a String argument
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

// StringNumericLiteral can have leading and trailing white space.
//
// https://tc39.es/ecma262/#prod-StringNumericLiteral
const StrWhiteSpaceChar = [
  // WhiteSpace ::
  //   <TAB>
  //   <VT>
  //   <FF>
  //   <ZWNBSP>
  //   <USP>
  "\u0009",
  "\u000B",
  "\u000C",
  "\uFEFF",
  "\u0020",
  "\u00a0",
  "\u1680",
  "\u2000",
  "\u2001",
  "\u2002",
  "\u2003",
  "\u2004",
  "\u2005",
  "\u2006",
  "\u2007",
  "\u2008",
  "\u2009",
  "\u200a",
  "\u202f",
  "\u205f",
  "\u3000",

  // LineTerminator ::
  //   <LF>
  //   <CR>
  //   <LS>
  //   <PS>
  "\u000A",
  "\u000D",
  "\u2028",
  "\u2029",
];

for (let locale of locales) {
  let pl = new Intl.PluralRules(locale);

  for (let number of numbers) {
    // Including non-decimal representation.
    for (let n of [
      `${number}`,
      `0b${number.toString(2)}`,
      `0B${number.toString(2)}`,
      `0o${number.toString(8)}`,
      `0O${number.toString(8)}`,
      `0x${number.toString(16)}`,
      `0X${number.toString(16)}`,
    ]) {
      let expected = pl.select(number);

      assert.sameValue(
        pl.select(n),
        expected,
        `${locale}: ${number} as the String "${n}" resolves to the same category`
      );

      for (let ws of StrWhiteSpaceChar) {
        assert.sameValue(
          pl.select(ws + n),
          expected,
          `${locale}: ${number} as the String "${n}" resolves to the same category, with leading white space U+${ws.codePointAt(0).toString(16).padStart(4, "0")}`
        );

        assert.sameValue(
          pl.select(n + ws),
          expected,
          `${locale}: ${number} as the String "${n}" resolves to the same category, with trailing white space U+${ws.codePointAt(0).toString(16).padStart(4, "0")}`
        );

        assert.sameValue(
          pl.select(ws + n + ws),
          expected,
          `${locale}: ${number} as the String "${n}" resolves to the same category, with surrounding white space U+${ws.codePointAt(0).toString(16).padStart(4, "0")}`
        );
      }
    }
  }
}
