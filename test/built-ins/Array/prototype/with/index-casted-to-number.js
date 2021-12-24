// Copyright (C) 2021 Igalia. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-array.prototype.with
description: >
  Array.prototype.with casts the index to an integer.
info: |
  Array.prototype.with ( index, value )

  ...
  2. Let len be ? LengthOfArrayLike(O).
  3. Let relativeIndex be ? ToIntegerOrInfinity(index).
  4. If index >= 0, let actualIndex be relativeIndex.
  5. Else, let actualIndex be len + relativeIndex.
  ...
features: [change-array-by-copy]
includes: [deepEqual.js]
---*/

var arr = [0, 4, 16];

assert.deepEqual(arr.with(1.2, 7), [0, 7, 16]);
assert.deepEqual(arr.with("1", 3), [0, 3, 16]);
assert.deepEqual(arr.with("-1", 5), [1, 5, 6]);
assert.deepEqual(arr.with(NaN, 2), [2, 4, 16]);
assert.deepEqual(arr.with("dog", "cat"), ["cat", 4, 16]);
