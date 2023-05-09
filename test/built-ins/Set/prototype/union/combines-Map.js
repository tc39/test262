// Copyright (C) 2023 Anthony Frehner. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: pending
description: Set.prototype.union combines with Map
features: [Set-methods]
---*/

const s1 = new Set([1, 2]);
const m1 = new Map([
  [2, "two"],
  [3, "three"],
]);
const expects = [1, 2, 3];
const combined = s1.union(m1);

combined.forEach(function (value) {
  assert.sameValue(value, expects.shift());
});

assert.sameValue(expects.length, 0, "The value of expects.length is 0");
assert.sameValue(combined.size, 3, "The combined set size is 3");
assert.sameValue(combined instanceof Set, true, "The returned object is a Set");
