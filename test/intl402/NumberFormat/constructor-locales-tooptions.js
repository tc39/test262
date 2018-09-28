// Copyright (C) 2018 Ujjwal Sharma. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-initializenumberformat
description: >
  Tests that Intl.NumberFormat contructor converts the locales argument
  to an object using `ToObject` (7.1.13).
info: |
  9.2.1 CanonicalizeLocaleList

  4.a. Let O be ? ToObject(locales).
---*/

const toObjectResults = [[true, new Boolean(true)], [42, new Number(42)]];

// Test if ToObject is used to convert primitives to Objects.
toObjectResults.forEach(pair => {
  const [value, result] = pair;
  assert.sameValue(
    new Intl.NumberFormat(value).resolvedOptions(),
    new Intl.NumberFormat(result).resolvedOptions()
  );
});

// ToObject throws a TypeError for undefined and null, but it's not called
// when locales is undefined.
assert.throws(TypeError, () => new Intl.NumberFormat(null));
