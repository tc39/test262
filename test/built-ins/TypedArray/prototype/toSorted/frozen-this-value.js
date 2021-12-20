// Copyright (C) 2021 Igalia. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-%typedarray%.prototype.toReversed
description: >
  TypedArray.prototype.toReversed works on frozen TAs
includes: [testTypedArray.js, compareArray.js]
features: [TypedArray, change-array-by-copy]
---*/

testWithTypedArrayConstructors(TA => {
  var ta = Object.freeze(new TA([3, 1, 2]));

  var result = ta.toSorted();
  assert.compareArray(result, [1, 2, 3]);
});
