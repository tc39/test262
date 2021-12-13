// Copyright (C) 2021 Igalia. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-%typedarray%.prototype.toReversed
description: >
  TypedArray.prototype.toReversed creates an empty array if the this value .length is not a positive integer.
info: |
  TypedArray.prototype.toReversed ( )

  ...
  3. Let len be O.[[ArrayLength]].
  ...
includes: [testTypedArray.js]
features: [TypedArray, change-array-by-copy]
---*/

testWithTypedArrayConstructors(TA => {
  var ta = new TA([0, 1, 2]);
  Object.defineProperty(ta, "length", { value: 2 })
  assert.compareArray(ta.toReversed(), [2, 1, 0]);

  ta = new TA([0, 1, 2]);
  Object.defineProperty(ta, "length", { value: 5 });
  assert.compareArray(ta.toReversed(), [2, 1, 0]);
});

var length;
Object.defineProperty(TypedArray.prototype, "length", {
  get: () => length,
});

testWithTypedArrayConstructors(TA => {
  var ta = new TA([0, 1, 2]);

  length = 2;
  assert.compareArray(ta.toReversed(), [2, 1, 0]);

  length = 5;
  assert.compareArray(ta.toReversed(), [2, 1, 0]);
});
