// Copyright 2023 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-Intl.DisplayNames.prototype.of
description: Returns string value for valid `script` codes
info: |
  12.3.3 Intl.DisplayNames.prototype.of ( code )
  ...
  3. If type is "script", then
    a. If code cannot be matched by the unicode_script_subtag Unicode locale nonterminal, throw a RangeError exception.
    b. Assert: The length of code is 4, and every code unit of code represents an ASCII letter (0x0041 through 0x005A and 0x0061 through 0x007A, both inclusive).
    c. Let first be the ASCII-uppercase of the substring of code from 0 to 1.
    d. Let rest be the ASCII-lowercase of the substring of code from 1.
    e. Return the string-concatenation of first and rest.
    b. Return the ASCII-uppercase of code.
features: [Intl.DisplayNames]
---*/

var displayNames = new Intl.DisplayNames(undefined, {type: 'script'});

assert.sameValue(typeof displayNames.of('aaaa'), 'string', 'aaaa');
assert.sameValue(typeof displayNames.of('AAAA'), 'string', 'AAAA');
assert.sameValue(typeof displayNames.of('Aaaa'), 'string', 'Aaaa');
assert.sameValue(typeof displayNames.of('aAAa'), 'string', 'aAAa');
assert.sameValue(typeof displayNames.of('Aaaa'), 'string', 'Aaaa');

