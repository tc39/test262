// Copyright (C) 2023 Anthony Frehner. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: pending
description: GetSetRecord if the Set-like object's 'has' property is not callable an error is thrown
info: |
    7. Let has be ? Get(obj, "has").
    8. If IsCallable(has) is false, throw a TypeError exception.
features: [Set-methods]
---*/

assert.throws(
  TypeError,
  function () {
    const s1 = new Set([1, 2]);
    const s2 = {
      size: 2,
      has: undefined,
      keys: function* keys() {
        yield 2;
        yield 3;
      },
    };
    s1.union(s2);
  },
  "GetSetRecord throws an error when has is not callable"
);
