// Copyright (C) 2018 Leo Balter.  All rights reserved.
// Copyright (C) 2024 Aurèle Barrière.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: prod-CharacterClassEscape
description: Check that all whitespace characters are matched by \s.
info: |
    21.2.2.12 CharacterClassEscape

    The production CharacterClassEscape :: s evaluates as follows:
        Return the set of characters containing the characters that are on the right-hand side of
        the WhiteSpace or LineTerminator productions.
features: [String.fromCodePoint]
includes: [regExpUtils.js]
---*/

const str = buildString({
    loneCodePoints: [
        0x000020,
        0x0000A0,
        0x001680,
        0x00202F,
        0x00205F,
        0x003000,
        0x00FEFF,
    ],
    ranges: [
        [0x000009, 0x00000D],
        [0x002000, 0x00200A],
        [0x002028, 0x002029],
    ],
});

const re = /^\s+$/;
const re_u = /^\s+$/u;

const regexes = [re, re_u];

const errors = [];

for (const regex of regexes) {
    if (!regex.test(str)) {
	// Error, let's find out where
	for (const char of str) {
            if (!regex.test(char)) {
		errors.push('0x' + char.codePointAt(0).toString(16));
            }
	}
    }
};

assert.sameValue(
    errors.length,
    0,
    'Expected full match, but did not match: ' + errors.join(',')
);
