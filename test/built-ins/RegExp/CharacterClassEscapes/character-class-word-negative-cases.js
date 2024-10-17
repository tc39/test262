// Copyright (C) 2018 Leo Balter.  All rights reserved.
// Copyright (C) 2024 Aurèle Barrière.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: prod-CharacterClassEscape
description: Check that none of the non-word characters are matched by \w.
info: |
    21.2.2.12 CharacterClassEscape

    The production CharacterClassEscape :: w evaluates as follows:
        Return the set of all characters returned by WordCharacters().
features: [String.fromCodePoint]
includes: [regExpUtils.js]
---*/

const str = buildString({
    loneCodePoints: [0x000060],
    ranges: [
        [0x00DC00, 0x00DFFF],
        [0x000000, 0x00002F],
        [0x00003A, 0x000040],
        [0x00005B, 0x00005E],
        [0x00007B, 0x00DBFF],
        [0x00E000, 0x10FFFF],
    ],
});

const re = /\w/;
const re_u = /\w/u;

const regexes = [re, re_u];

const errors = [];

for (const regex of regexes) {
    if (regex.test(str)) {
	// Error, let's find out where
	for (const char of str) {
            if (regex.test(char)) {
		errors.push('0x' + char.codePointAt(0).toString(16));
            }
	}
    }
};

assert.sameValue(
    errors.length,
    0,
    'Expected no match, but matched: ' + errors.join(',')
);
