// Copyright (C) 2018 Leo Balter.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: prod-CharacterClassEscape
description: >
    Compare range for Non Word class escape, \\W with flags ug
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

var chunks = [];
var chunk;
var totalChunks = Math.ceil(1114111 / 2000);
var codePoint;

for (codePoint = 0; codePoint < 0x10FFFF; codePoint++) {

    // split strings to avoid a super long one;
    chunks[codePoint % totalChunks] = String.fromCodePoint(codePoint);
}

chunks.forEach(function(str) {
    var re = /\W/ug;
    var matchingRange = /[\0-\/:-@\[-\^`\{-\u{10FFFF}]/ug;
    var fromEscape = str.replace(re, '');
    var fromRange = str.replace(matchingRange, '');

    assert.sameValue(fromEscape, fromRange);
});
