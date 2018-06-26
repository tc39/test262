// Copyright (C) 2018 Leo Balter.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: prod-CharacterClassEscape
description: >
    Compare range for Whitespace class escape, \\s with flags u
info: |
    This is a generated test, please checkout https://github.com/bocoup/test262-regexp-generator
    for any changes.

    CharacterClassEscape[U] ::
        d
        D
        s
        S
        w
        W

    21.2.2.12 CharacterClassEscape
    
    The production CharacterClassEscape :: d evaluates as follows:
        Return the ten-element set of characters containing the characters 0 through 9 inclusive.
    The production CharacterClassEscape :: D evaluates as follows:
        Return the set of all characters not included in the set returned by CharacterClassEscape :: d.
    The production CharacterClassEscape :: s evaluates as follows:
        Return the set of characters containing the characters that are on the right-hand side of
        the WhiteSpace or LineTerminator productions.
    The production CharacterClassEscape :: S evaluates as follows:
        Return the set of all characters not included in the set returned by CharacterClassEscape :: s.
    The production CharacterClassEscape :: w evaluates as follows:
        Return the set of all characters returned by WordCharacters().
    The production CharacterClassEscape :: W evaluates as follows:
        Return the set of all characters not included in the set returned by CharacterClassEscape :: w.
features: [String.fromCodePoint]
---*/

var re = /\s/u;
var matchingRange = /[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]/u;
var msg = '"\\u{REPLACE}" should be in range for \\s with flags u';

var i;
var fromEscape, fromRange, str;
for (i = 0; i < 0x10FFFF; i++) {
    if (i === 0x180E) { continue; } // Skip 0x180E, addressed in a separate test file
    str = String.fromCodePoint(i);
    fromEscape = !str.replace(re, 'test262');
    fromRange = !str.replace(re, 'test262');
    assert.sameValue(fromEscape, fromRange, msg.replace('REPLACE', i));
}