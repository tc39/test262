// Copyright (C) 2021 Igalia. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-array.prototype.toSpliced
description: >
  Array.prototype.toSpliced does not mutate its this value
features: [change-array-by-copy]
---*/

var arr = [2, 0, 1];
arr.toSpliced(0, 0, -1);

assert.deepEqual(arr, [2, 0, 1]);
