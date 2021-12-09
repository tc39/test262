// Copyright (C) 2021 Igalia. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-array.prototype.toReversed
description: >
  Array.prototype.toReversed does not mutate its this value
features: [change-array-by-copy]
---*/

var arr = [0, 1, 2];
arr.toReversed();

assert.deepEqual(arr, [0, 1, 2]);
