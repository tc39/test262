// Copyright (C) 2021 Igalia. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-%typedarray%.prototype.toSpliced
description: %TypedArray%.prototype.toSpliced(undefined, undefined) returns a copy of the original TypedArray
info: |
  22.1.3.25 %TypedArray%.prototype.toSpliced ( start, deleteCount , ...items )

  ...
  4. Let relativeStart be ? ToIntegerOrInfinity(start).
  ...
  7. Else, let actualStart be min(relativeStart, len).
  8. If start is not present, then
    a. Let insertCount be 0.
    b. Let actualDeleteCount be 0.
  9. Else if deleteCount is not present, then
    a. Let insertCount be 0.
    b. Let actualDeleteCount be len - actualStart.
  ...
includes: [testTypedArray.js, compareArray.js]
features: [TypedArray, change-array-by-copy]
---*/

withTypedArrayConstructors((TA) => {
  var result = new TA([1, 2, 3]).toSpliced(undefined, undefined);

  assert.compareArray(result, [1, 2, 3]);
});
