// Copyright (C) 2024 Leo Balter. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-encodeforregexescape
description: Encodes code points greater than 0xFF
info: |
  EncodeForRegExpEscape ( c )

  3. Let otherPunctuators be the string-concatenation of ",-=<>#&!%:;@~'`" and the code unit 0x0022 (QUOTATION MARK).
  4. Let toEscape be StringToCodePoints(otherPunctuators).
  5. If toEscape contains c, c is matched by WhiteSpace or LineTerminator, or c has the same numeric value as a leading surrogate or trailing surrogate, then
    a. If c ≤ 0xFF, then
      i. Let hex be Number::toString(𝔽(c), 16).
      ii. Return the string-concatenation of the code unit 0x005C (REVERSE SOLIDUS), "x", and StringPad(hex, 2, "0", START).
    b. Let escaped be the empty String.
    c. Let codeUnits be UTF16EncodeCodePoint(c).
    d. For each code unit cu of codeUnits, do
      i. Set escaped to the string-concatenation of escaped and UnicodeEscape(cu).
    e. Return escaped.
  6. Return UTF16EncodeCodePoint(c).
features: [RegExp.escape]
---*/

const codePoints = String.fromCharCode(0x100, 0x200, 0x300);
const expectedEscapedCodePoints = '\\u0100\\u0200\\u0300';

assert.sameValue(RegExp.escape(codePoints), expectedEscapedCodePoints, 'Code points > 0xFF are correctly escaped');
