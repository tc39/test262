// Copyright (c) 2020 Rick Waldron.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-array.prototype.findlastindex
description: Array.prototype.findLastIndex applied to boolean primitive
---*/

assert.sameValue(
  Array.prototype.findLastIndex.call(true, () => {}),
  -1,
  'Array.prototype.findLastIndex.call(true, () => {}) must return -1'
);
assert.sameValue(
  Array.prototype.findLastIndex.call(false, () => {}),
  -1,
  'Array.prototype.findLastIndex.call(false, () => {}) must return -1'
);
