// Copyright (c) 2021 Rick Waldron.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-array.prototype.findlast
description: Array.prototype.findLast applied to boolean primitive
---*/

assert.sameValue(
  Array.prototype.findLast.call(true, () => {}),
  undefined,
  'Array.prototype.findLast.call(true, () => {}) must return undefined'
);
assert.sameValue(
  Array.prototype.findLast.call(false, () => {}),
  undefined,
  'Array.prototype.findLast.call(false, () => {}) must return undefined'
);
