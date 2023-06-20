// Copyright (C) 2023 Anthony Frehner. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: pending
description: GetSetRecord if the Set-like object's 'keys' property is not callable an error is thrown
info: |
    9. Let keys be ? Get(obj, "keys").
    10. If IsCallable(keys) is false, throw a TypeError exception.
features: [Set-methods]
---*/

assert.throws(
  TypeError,
  function () {
    const s1 = new Set([1, 2]);
    const s2 = {
      size: 2,
      has: () => {},
      keys: undefined,
    };
    s1.union(s2);
  },
  "GetSetRecord throws an error when keys is not callable"
);
