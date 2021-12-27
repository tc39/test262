// Copyright (C) 2021 Igalia. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-%typedarray%.prototype.toSpliced
description: deleteCount is clamped between zero and len - actualStart
info: |
  22.1.3.25 %TypedArray%.prototype.toSpliced (start, deleteCount , ...items )

  ...
  10. Else,
    a. Let insertCount be the number of elements in items.
    b. Let dc be ? ToIntegerOrInfinity(deleteCount).
    c. Let actualDeleteCount be the result of clamping dc between 0 and len - actualStart.
  ...
includes: [testTypedArray.js, compareArray.js]
features: [TypedArray, change-array-by-copy]
---*/

testWithTypedArrayConstructors((TA) => {
  assert.compareArray(
    new TA([0, 1, 2, 3, 4, 5]).toSpliced(2, -1),
    [0, 1, 2, 3, 4, 5]
  );

  assert.compareArray(
    new TA([0, 1, 2, 3, 4, 5]).toSpliced(-4, -1),
    [0, 1, 2, 3, 4, 5]
  );

  assert.compareArray(
    new TA([0, 1, 2, 3, 4, 5]).toSpliced(2, 6),
    [0, 1]
  );

  assert.compareArray(
    new TA([0, 1, 2, 3, 4, 5]).toSpliced(-4, 6),
    [0, 1]
  );
});
