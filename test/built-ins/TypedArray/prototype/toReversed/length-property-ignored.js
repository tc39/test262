// Copyright (C) 2021 Igalia. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-%typedarray%.prototype.toReversed
description: >
  %TypedArray%.prototype.toReversed creates an empty array if the this value .length is not a positive integer.
info: |
  %TypedArray%.prototype.toReversed ( )

  ...
  3. Let len be O.[[ArrayLength]].
  ...
includes: [testTypedArray.js, compareArray.js]
features: [TypedArray, change-array-by-copy]
---*/

testWithTypedArrayConstructors(TA => {
  var ta = new TA([0, 1, 2]);
  Object.defineProperty(ta, "length", { value: 2 })
  var res = ta.toReversed();
  assert.compareArray([res[0], res[1], res[2], res[3]], [2, 1, 0, undefined]);

  ta = new TA([0, 1, 2]);
  Object.defineProperty(ta, "length", { value: 5 });
  res = ta.toReversed();
  assert.compareArray([res[0], res[1], res[2], res[3]], [2, 1, 0, undefined]);
});

var length;
Object.defineProperty(TypedArray.prototype, "length", {
  get: () => length,
});

testWithTypedArrayConstructors(TA => {
  var ta = new TA([0, 1, 2]);

  length = 2;
  var res = ta.toReversed();
  assert.compareArray([res[0], res[1], res[2], res[3]], [2, 1, 0, undefined]);

  length = 5;
  res = ta.toReversed();
  assert.compareArray([res[0], res[1], res[2], res[3]], [2, 1, 0, undefined]);
});
