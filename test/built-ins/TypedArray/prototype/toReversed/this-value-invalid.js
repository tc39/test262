// Copyright (C) 2021 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-%typedarray%.prototype.toReversed
description: >
  %TypedArray%.prototype.toReversed throws if the receiver is not a valid TypedArray
info: |
  %TypedArray%.prototype.toReversed ( )

  1. Let O be the this value.
  2. Perform ? ValidateTypedArray(O).
  ...
includes: [testTypedArray.js]
features: [TypedArray, change-array-by-copy]
---*/

var invalidValues = {
  'null': null,
  'undefined': undefined,
  'true': true,
  '"abc"': "abc",
  '12': 12,
  'Symbol()': Symbol(),
  '[1, 2, 3]': [1, 2, 3],
  '{ 0: 1, 1: 2, 2: 3, length: 3 }': { 0: 1, 1: 2, 2: 3, length: 3 },
  'Uint8Array.prototype': Uint8Array.prototype,
};

Object.keys(invalidValues).forEach(desc => {
  var value = invalidValues[desc];
  assert.throws(TypeError, () => {
    TypedArray.prototype.toReversed.call(value);
  }, `${desc} is not a valid TypedArray`);
});
