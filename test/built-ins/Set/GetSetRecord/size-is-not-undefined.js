// Copyright (C) 2023 Anthony Frehner. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: pending
description: GetSetRecord if the Set-like object has a size of 'undefined' an error is thrown
info: |
    2. Let rawSize be ? Get(obj, "size").
    3. Let numSize be ? ToNumber(rawSize).
    4. NOTE: If rawSize is undefined, then numSize will be NaN.
    5. If numSize is NaN, throw a TypeError exception.
features: [Set-methods]
---*/

assert.throws(
  TypeError,
  function () {
    const s1 = new Set([1, 2]);
    const s2 = {
      size: undefined,
      has: () => {},
      keys: function* keys() {
        yield 2;
        yield 3;
      },
    };
    s1.union(s2);
  },
  "GetSetRecord throws an error when size is undefined"
);
