// Copyright 2021 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-intl.locale.prototype.getNumberingSystems
description: >
    Checks that the return value of Intl.Locale.prototype.getNumberingSystems is an Array.
info: |
  NumberingSystemsOfLocale ( loc )
  ...
  3. If r is not undefined, then
    ...
    d. Let list be « numberingSystems[0] ».
  ...
  5. Return CreateArrayFromList(list).
features: [Intl.Locale,Intl.Locale-info]
---*/

var numberingSystems = new Intl.Locale('en').getNumberingSystems();
assert(Array.isArray(numberingSystems));
assert.sameValue(numberingSystems.length, 1, 'array has exactly one element');
