// Copyright (C) 2023 Anthony Frehner. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: pending
description: Set.prototype.union doesn't work with arrays
---*/

assert.throws(
  TypeError,
  function () {
    const s1 = new Set([1, 2]);
    const s2 = [3];
    s1.union(s2);
  },
  "Throws an error when an array is used"
);
