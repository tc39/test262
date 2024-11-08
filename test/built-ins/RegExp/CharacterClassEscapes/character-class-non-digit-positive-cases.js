// Copyright (C) 2018 Leo Balter.  All rights reserved.
// Copyright (C) 2024 Aurèle Barrière.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: prod-CharacterClassEscape
description: Check that all non-digit characters are matched by \D.
info: |
    21.2.2.12 CharacterClassEscape

    The production CharacterClassEscape :: d evaluates as follows:
        Return the ten-element set of characters containing the characters 0 through 9 inclusive.
    The production CharacterClassEscape :: D evaluates as follows:
        Return the set of all characters not included in the set returned by CharacterClassEscape :: d.
features: [String.fromCodePoint]
includes: [regExpUtils.js]
---*/

const str = buildString({
  loneCodePoints: [],
  ranges: [
      [0x000000, 0x00002F],
      [0x00003A, 0x10FFFF],
  ],
});

const re = /^\D+$/;
const re_u = /^\D+$/u;

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
