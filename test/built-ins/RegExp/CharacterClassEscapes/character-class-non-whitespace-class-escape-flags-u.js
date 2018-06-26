// Copyright (C) 2018 Leo Balter.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: prod-CharacterClassEscape
description: >
    Compare range for Non whitespace class escape, \\S with flags u
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

var re = /\S/u;
var matchingRange = /(?:[\0-\x08\x0E-\x1F!-\x9F\xA1-\u167F\u1681-\u1FFF\u200B-\u2027\u202A-\u202E\u2030-\u205E\u2060-\u2FFF\u3001-\uD7FF\uE000-\uFEFE\uFF00-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])/u;
var msg = '"\\u{REPLACE}" should be in range for \\S with flags u';

var i;
var fromEscape, fromRange, str;
for (i = 0; i < 0x10FFFF; i++) {
    if (i === 0x180E) { continue; } // Skip 0x180E, addressed in a separate test file
    str = String.fromCodePoint(i);
    fromEscape = !str.replace(re, 'test262');
    fromRange = !str.replace(re, 'test262');
    assert.sameValue(fromEscape, fromRange, msg.replace('REPLACE', i));
}