// Copyright 2023 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-Intl.DisplayNames.prototype.of
description: Returns string value for valid `currency` codes
info: |
  12.5.1 CanonicalCodeForDisplayNames ( type, code )

  ...
  6. Assert: type is "currency".
  7. If ! IsWellFormedCurrencyCode(code) is false, throw a RangeError exception.
  8. Return the ASCII-uppercase of code.

  IsWellFormedCurrencyCode ( code )

    1. If the length of currency is not 3, return false.
    2. Let normalized be the ASCII-uppercase of currency.
    3. If normalized contains any code unit outside of 0x0041 through 0x005A (corresponding to Unicode characters LATIN CAPITAL LETTER A through LATIN CAPITAL LETTER Z), return false.
    4. Return true.
features: [Intl.DisplayNames]
---*/

var displayNames = new Intl.DisplayNames(undefined, {type: 'currency'});

assert.sameValue(typeof displayNames.of('aaa'), 'string', 'aaa');
assert.sameValue(typeof displayNames.of('nnn'), 'string', 'nnn');
assert.sameValue(typeof displayNames.of('MMM'), 'string', 'MMM');
assert.sameValue(typeof displayNames.of('ZZZ'), 'string', 'ZZZ');
assert.sameValue(typeof displayNames.of('Bbb'), 'string', 'Bbb');
assert.sameValue(typeof displayNames.of('Ooo'), 'string', 'Ooo');
assert.sameValue(typeof displayNames.of('gGg'), 'string', 'gGg');
assert.sameValue(typeof displayNames.of('tTT'), 'string', 'tTT');
