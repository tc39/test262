// Copyright (C) 2021 Igalia. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-array.prototype.toSpliced
description: >
  Array.prototype.toSpliced throws if the receiver is null or undefined
info: |
  Array.prototype.toSpliced ( start, deleteCount, ...items )

  1. Let O be ? ToObject(this value).
  2. Let len be ? LengthOfArrayLike(O).
  ...
features: [change-array-by-copy]
includes: [compareArray.js]
---*/

assert.compareArray(Array.prototype.toSpliced.call(true, 0, 0), []);
assert.compareArray(Array.prototype.toSpliced.call(false, 0, 0), []);
