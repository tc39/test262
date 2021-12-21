// Copyright (C) 2021 Igalia. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-%typedarray%.prototype.toSpliced
description: >
  %TypedArray%.prototype.toSpliced works on frozen TAs
includes: [testTypedArray.js, compareArray.js]
features: [TypedArray, change-array-by-copy]
---*/

testWithTypedArrayConstructors(TA => {
  var ta = Object.freeze(new TA([3, 1, 2]));

  var result = ta.toSpliced(0, 2, 4);
  assert.compareArray(result, [4, 3]);
});
