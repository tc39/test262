// Copyright (C) 2018 Leo Balter.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: prod-CharacterClassEscape
description: >
  Compare range for non-digit class escape \D with flags g
info: |
  This is a generated test. Please check out
  https://github.com/tc39/test262/tree/main/tools/regexp-generator/
  for any changes.

  CharacterClassEscape[UnicodeMode] ::
    d
    D
    s
    S
    w
    W
    [+UnicodeMode] p{ UnicodePropertyValueExpression }
    [+UnicodeMode] P{ UnicodePropertyValueExpression }

  22.2.2.9 Runtime Semantics: CompileToCharSet

  CharacterClassEscape :: d
    1. Return the ten-element CharSet containing the characters 0, 1, 2, 3, 4,
      5, 6, 7, 8, and 9.
  CharacterClassEscape :: D
    1. Let S be the CharSet returned by CharacterClassEscape :: d.
    2. Return CharacterComplement(rer, S).
  CharacterClassEscape :: s
    1. Return the CharSet containing all characters corresponding to a code
      point on the right-hand side of the WhiteSpace or LineTerminator
      productions.
  CharacterClassEscape :: S
    1. Let S be the CharSet returned by CharacterClassEscape :: s.
    2. Return CharacterComplement(rer, S).
  CharacterClassEscape :: w
    1. Return MaybeSimpleCaseFolding(rer, WordCharacters(rer)).
  CharacterClassEscape :: W
    1. Let S be the CharSet returned by CharacterClassEscape :: w.
    2. Return CharacterComplement(rer, S).
features: [String.fromCodePoint]
includes: [regExpUtils.js]
flags: [generated]
---*/

const str = buildString({
    loneCodePoints: [],
    ranges: [
        [0x00DC00, 0x00DFFF],
        [0x000000, 0x00002F],
        [0x00003A, 0x00DBFF],
        [0x00E000, 0x00FFFF],
    ],
});

const re = /\D/g;

const errors = [];

if (!re.test(str)) {
  // Error, let's find out where
  for (const char of str) {
    if (!re.test(char)) {
      errors.push('0x' + char.codePointAt(0).toString(16));
    }
  }
}

assert.sameValue(
  errors.length,
  0,
  'Expected matching code points, but received: ' + errors.join(',')
);
