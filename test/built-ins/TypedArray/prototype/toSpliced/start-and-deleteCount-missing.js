// Copyright (C) 2021 Igalia. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-%typedarray%.prototype.toSpliced
description: %TypedArray%.prototype.toSpliced returns a copy of the TypedArray if called with zero arguments
info: |
  22.1.3.25 %TypedArray%.prototype.toSpliced (start, deleteCount , ...items )

  ...
  4. Let relativeStart be ? ToIntegerOrInfinity(start).
  ...
  7. Else, let actualStart be min(relativeStart, len).
  8. If start is not present, then
    a. Let actualDeleteCount be 0.
  ...
includes: [testTypedArray.js, compareArray.js]
features: [TypedArray, change-array-by-copy]
---*/

withTypedArrayConstructors((TA) => {
  var result = new TA([1, 2, 3]).toSpliced();

  assert.compareArray(result, [1, 2, 3]);
});
