// Copyright (C) 2018 Leo Balter.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: prod-CharacterClassEscape
description: >
    Compare range for Whitespace class escape, \\s with flags g
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
---*/

var chunks = [];
var chunk;
var totalChunks = Math.ceil(65535 / 2000);
var codePoint;

for (codePoint = 0; codePoint < 0xFFFF; codePoint++) {
    if (codePoint === 0x180E) { continue; } // Skip 0x180E, addressed in a separate test file
    // split strings to avoid a super long one;
    chunks[codePoint % totalChunks] = String.fromCharCode(codePoint);
}

chunks.forEach(function(str) {
    var re = /\s/g;
    var matchingRange = /[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]/g;
    var fromEscape = str.replace(re, '');
    var fromRange = str.replace(matchingRange, '');

    assert.sameValue(fromEscape, fromRange);
});
