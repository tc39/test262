// Copyright (C) 2021 Igalia. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-%typedarray%.prototype.toSorted
description: >
  TypedArray.prototype.toSorted creates an empty array if the this value .length is not a positive integer.
info: |
  TypedArray.prototype.toSorted ( comparefn )

  ...
  4. Let len be O.[[ArrayLength]].
  ...
includes: [testTypedArray.js, compareArray.js]
features: [TypedArray, change-array-by-copy]
---*/

testWithTypedArrayConstructors(TA => {
  var ta = new TA([3, 1, 2]);
  Object.defineProperty(ta, "length", { value: 2 })
  assert.compareArray(ta.toSorted(), [1, 2, 3]);

  ta = new TA([3, 1, 2]);
  Object.defineProperty(ta, "length", { value: 5 });
  assert.compareArray(ta.toSorted(), [1, 2, 3]);
});

var length;
Object.defineProperty(TypedArray.prototype, "length", {
  get: () => length,
});

testWithTypedArrayConstructors(TA => {
  var ta = new TA([3, 1, 2]);

  length = 2;
  assert.compareArray(ta.toSorted(), [1, 2, 3]);

  length = 5;
  assert.compareArray(ta.toSorted(), [1, 2, 3]);
});
