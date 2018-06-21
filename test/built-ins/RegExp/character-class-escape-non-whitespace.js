// Copyright 2018 Leonardo Balter. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-characterclassescape
description: Detect non WhiteSpace
info: |
    The production CharacterClassEscape :: S evaluates by returning
    the set of all characters not included in the set returned by
    CharacterClassEscape :: s
---*/

var j;
var i;
var str;
var res;

var whitespaceChars = [
  0x0009, // CHARACTER TABULATION
  0x000A, // LINE FEED (LF)
  0x000B, // LINE TABULATION
  0x000C, // FORM FEED (FF)
  0x000D, // CARRIAGE RETURN (CR)
  0x0020, // SPACE
  0x00A0, // NO-BREAK SPACE
  0x1680, // OGHAM SPACE MARK
  0x2000, // EN QUAD
  0x2001, // EM QUAD
  0x2002, // EN SPACE
  0x2003, // EM SPACE
  0x2004, // THREE-PER-EM SPACE
  0x2005, // FOUR-PER-EM SPACE
  0x2006, // SIX-PER-EM SPACE
  0x2007, // FIGURE SPACE
  0x2008, // PUNCTUATION SPACE
  0x2009, // THIN SPACE
  0x200A, // HAIR SPACE
  0x2028, // LINE SEPARATOR
  0x2029, // PARAGRAPH SEPARATOR
  0x202F, // NARROW NO-BREAK SPACE
  0x205F, // MEDIUM MATHEMATICAL SPACE
  0x3000, // IDEOGRAPHIC SPACE
  0xFEFF, // ZERO WIDTH NO-BREAK SPACE
];

for (j = 0x0000; j < 0x10000; j++) {
  if (j === 0x180E) { continue; } // Skip 0x180E, current test in a separate file
  str = String.fromCharCode(j);
  res = str.replace(/\S/, "test262");
  if (whitespaceChars.indexOf(j) >= 0) {
    assert.sameValue(res, str, "WhiteSpace character, charCode: " + j);
  } else {
    assert.sameValue(res, "test262", "Non WhiteSpace character, charCode: " + j);
  }
}
