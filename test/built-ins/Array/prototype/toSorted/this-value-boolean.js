// Copyright (C) 2021 Igalia. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-array.prototype.toSorted
description: >
  Array.prototype.toSorted throws if the receiver is null or undefined
info: |
  Array.prototype.toSorted ( compareFn )

  1. Let O be ? ToObject(this value).
  2. Let len be ? LengthOfArrayLike(O).
  ...
features: [change-array-by-copy]
includes: [deepEqual.js]
---*/

assert.deepEqual(Array.prototype.toSorted.call(true), []);
assert.deepEqual(Array.prototype.toSorted.call(false), []);
