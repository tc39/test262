// Copyright (C) 2021 Igalia. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-%typedarray%.prototype.toSorted
description: >
  %TypedArray%.prototype.toSorted throws if the receiver is null or undefined
info: |
  %TypedArray%.prototype.toSorted ( comparefn )

  2. Let O be the this value.
  3. Perform ? ValidateTypedArray(O).
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
    TypedArray.prototype.toSorted.call(value);
  }, `${desc} is not a valid TypedArray`);
});
