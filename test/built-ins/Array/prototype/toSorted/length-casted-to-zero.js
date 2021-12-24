// Copyright (C) 2021 Igalia. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-array.prototype.toSorted
description: >
  Array.prototype.toSorted creates an empty array if the this value .length is not a positive integer.
info: |
  Array.prototype.toSorted ( compareFn )

  ...
  3. Let len be ? LengthOfArrayLike(O).
  ...
features: [change-array-by-copy]
includes: [deepEqual.js]
---*/

assert.deepEqual(Array.prototype.toSorted.call({ length: -2 }), []);
assert.deepEqual(Array.prototype.toSorted.call({ length: "dog" }), []);
assert.deepEqual(Array.prototype.toSorted.call({ length: NaN }), []);
