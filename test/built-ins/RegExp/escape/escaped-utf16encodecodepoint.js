// Copyright (C) 2024 Leo Balter. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-encodeforregexescape
description: UTF16EncodeCodePoint is called for remaining codepoints
info: |
  EncodeForRegExpEscape ( c )

  3. Let otherPunctuators be the string-concatenation of ",-=<>#&!%:;@~'`" and the code unit 0x0022 (QUOTATION MARK).
  4. Let toEscape be StringToCodePoints(otherPunctuators).
  5. If toEscape contains c, c is matched by WhiteSpace or LineTerminator, or c has the same numeric value as a leading surrogate or trailing surrogate, then
    ...
  6. Return UTF16EncodeCodePoint(c).
features: [RegExp.escape]
---*/

// Test code points > 0xFF
const codePoints = String.fromCharCode(0x100, 0x200, 0x300);
const expectedEscapedCodePoints = '\\u0100\\u0200\\u0300';

assert.sameValue(RegExp.escape(codePoints), expectedEscapedCodePoints, 'Code points > 0xFF are correctly escaped');

assert.sameValue(RegExp.escape('你好'), '\\u4F60\\u597D', 'Chinese characters are correctly escaped');
assert.sameValue(RegExp.escape('こんにちは'), '\\u3053\\u3093\\u306B\\u3061\\u306F', 'Japanese characters are correctly escaped');
assert.sameValue(RegExp.escape('안녕하세요'), '\\uC548\\uB155\\uD558\\uC138\\uC694', 'Korean characters are correctly escaped');
assert.sameValue(RegExp.escape('Привет'), '\\u041F\\u0440\\u0438\\u0432\\u0435\\u0442', 'Cyrillic characters are correctly escaped');
assert.sameValue(RegExp.escape('مرحبا'), '\\u0645\\u0631\\u062D\\u0628\\u0627', 'Arabic characters are correctly escaped');
assert.sameValue(RegExp.escape('हेलो'), '\\u0939\\u0947\\u0932\\u094B', 'Devanagari characters are correctly escaped');
assert.sameValue(RegExp.escape('Γειά σου'), '\\u0393\\u03B5\\u03B9\\u03AC \\u03C3\\u03BF\\u03C5', 'Greek characters are correctly escaped');
assert.sameValue(RegExp.escape('שלום'), '\\u05E9\\u05DC\\u05D5\\u05DD', 'Hebrew characters are correctly escaped');
assert.sameValue(RegExp.escape('สวัสดี'), '\\u0E2A\\u0E27\\u0E31\\u0E2A\\u0E14\\u0E35', 'Thai characters are correctly escaped');
assert.sameValue(RegExp.escape('नमस्ते'), '\\u0928\\u092E\\u0938\\u094D\\u0924\\u0947', 'Hindi characters are correctly escaped');
assert.sameValue(RegExp.escape('ሰላም'), '\\u1230\\u120B\\u121D', 'Amharic characters are correctly escaped');
assert.sameValue(RegExp.escape('हैलो'), '\\u0939\\u0948\\u0932\\u094B', 'Hindi characters with diacritics are correctly escaped');
assert.sameValue(RegExp.escape('안녕!'), '\\uC548\\uB155\\!', 'Korean character with special character is correctly escaped');
assert.sameValue(RegExp.escape('.hello\uD7FFworld'), '\\.hello\\uD7FFworld', 'Mixed ASCII and Unicode characters are correctly escaped');
