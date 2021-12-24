// Copyright (C) 2021 Igalia. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-array.prototype.toReversed
description: >
  Array.prototype.toReversed creates an empty array if the this value .length is not a positive integer.
info: |
  Array.prototype.toReversed ( )

  ...
  2. Let len be ? LengthOfArrayLike(O).
  ...
features: [change-array-by-copy]
includes: [deepEqual.js]
---*/

assert.deepEqual(Array.prototype.toReversed.call({ length: -2 }), []);
assert.deepEqual(Array.prototype.toReversed.call({ length: "dog" }), []);
assert.deepEqual(Array.prototype.toReversed.call({ length: NaN }), []);
