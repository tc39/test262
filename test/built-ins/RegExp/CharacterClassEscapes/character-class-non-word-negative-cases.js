// Copyright (C) 2018 Leo Balter.  All rights reserved.
// Copyright (C) 2024 Aurèle Barrière.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: prod-CharacterClassEscape
description: Check that none of the word characters are matched by \W.
info: |
    21.2.2.12 CharacterClassEscape

    The production CharacterClassEscape :: w evaluates as follows:
        Return the set of all characters returned by WordCharacters().
    The production CharacterClassEscape :: W evaluates as follows:
        Return the set of all characters not included in the set returned by CharacterClassEscape :: w.
features: [String.fromCodePoint]
includes: [regExpUtils.js]
---*/

const str = buildString({
    loneCodePoints: [0x00005F],
    ranges: [
        [0x000030, 0x000039],
        [0x000041, 0x00005A],
        [0x000061, 0x00007A],
    ],
});

const re = /\W/;
const re_u = /\W/u;

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
