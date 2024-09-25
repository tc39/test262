// Copyright (C) 2023 Anthony Frehner and Kevin Gibbons. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-set.prototype.difference
description: GetSetRecord allows Set-like objects
info: |
    1. If obj is not an Object, throw a TypeError exception.
    2. Let rawSize be ? Get(obj, "size").
    ...
    7. Let has be ? Get(obj, "has").
    ...
    9. Let keys be ? Get(obj, "keys").
features: [set-methods]
includes: [compareArray.js]
---*/

const s1 = new Set([1, 2]);
const s2 = {
  size: 2,
  has: (v) => {
    if (v === 1) return false;
    if (v === 2) return true;
    throw new Test262Error("Set.prototype.difference should only call its argument's has method with contents of this");
  },
  keys: function* keys() {
    throw new Test262Error("Set.prototype.difference should not call its argument's keys iterator when this.size ≤ arg.size");
  },
};
const expected = [1];
const combined = s1.difference(s2);

assert.compareArray([...combined], expected);
assert.sameValue(combined instanceof Set, true, "The returned object is a Set");
