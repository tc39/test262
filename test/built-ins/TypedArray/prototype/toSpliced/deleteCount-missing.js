// Copyright (C) 2021 Igalia. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-%typedarray%.prototype.toSpliced
description: %TypedArray%.prototype.toSpliced deletes the elements after start when called with one argument
info: |
  22.1.3.25 %TypedArray%.prototype.toSpliced (start, deleteCount , ...items )

  ...
  9. Else if deleteCount is not present, then
    a. Let insertCount be 0.
    b. Let actualDeleteCount be len - actualStart.
  ...
includes: [testTypedArray.js, compareArray.js]
features: [TypedArray, change-array-by-copy]
---*/

withTypedArrayConstructors((TA) => {
  assert.compareArray(
    new TA([1, 2, 3]).toSpliced(1),
    [1]
  );
});
