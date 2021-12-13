// Copyright (C) 2021 Igalia. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-array.prototype.toSpliced
description: Array.prototype.toSpliced(undefined, undefined) returns a copy of the original array
info: |
  22.1.3.25 Array.prototype.toSpliced (start, deleteCount , ...items )

  ...
  3. Let relativeStart be ? ToIntegerOrInfinity(start).
  ...
  6. Else, let actualStart be min(relativeStart, len).
  ...
  8. If start is not present, then
    a. Let actualDeleteCount be 0.
  8. Else if deleteCount is not present, then
    a. Let actualDeleteCount be len - actualStart.
  ...
---*/

var arrayLike = {
  0: "a",
  1: "b",
  get 2() { throw new Test262Error(); },
  3: "c",
  length: 4,
};

var result = Array.prototype.toSpliced.call(arrayLike, 2, 1);
assert.deepEqual(result, ["a", "b", "c"]);
