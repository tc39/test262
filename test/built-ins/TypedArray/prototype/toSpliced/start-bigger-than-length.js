// Copyright (C) 2021 Igalia. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-%typedarray%.prototype.toSpliced
description: >
  %TypedArray%.prototype.toSpliced converts the this value length to a number.
info: |
  %TypedArray%.prototype.toSpliced ( start, deleteCount, ...items )

  ...
  3. Let len be O.[[ArrayLength]].
  4. Let relativeStart be ? ToIntegerOrInfinity(start).
  5. If relativeStart is -∞, let actualStart be 0.
  6. Else if relativeStart < 0, let actualStart be max(len + relativeStart, 0).
  7. Else, let actualStart be min(relativeStart, len).
  ...
includes: [testTypedArray.js, compareArray.js]
features: [TypedArray, change-array-by-copy]
---*/

testWithTypedArrayConstructors((TA) => {
  var result = new TA([0, 1, 2, 3, 4]).toSpliced(10, 1, 5, 6);
  assert.compareArray(result, [0, 1, 2, 3, 4, 5, 6]);
});
