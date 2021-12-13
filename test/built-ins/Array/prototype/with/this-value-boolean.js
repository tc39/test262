// Copyright (C) 2021 Igalia. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-array.prototype.with
description: >
  Array.prototype.with casts primitive receivers to objects
info: |
  Array.prototype.with ( index, value )

  1. Let O be ? ToObject(this value).
  2. Let len be ? LengthOfArrayLike(O).
  ...
features: [change-array-by-copy]
---*/

Boolean.prototype.length = 2;
Boolean.prototype[0] = 0;
Boolean.prototype[1] = 1;

assert.deepEqual(Array.prototype.with.call(true, 0, 2), [2, 1]);
assert.deepEqual(Array.prototype.with.call(false, 0, 2), [2, 1]);
