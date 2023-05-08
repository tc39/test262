// Copyright (C) 2023 Anthony Frehner. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: pending
description: Set.prototype.union should not call Set.prototype.add
---*/

const s1 = new Set([1, 2]);
const s2 = new Set([2, 3]);
const expects = [1, 2, 3];

const originalAdd = Set.prototype.add;
let count = 0;
Set.prototype.add = function (...rest) {
  count++;
  originalAdd.apply(this, rest);
};

const combined = s1.union(s2);

combined.forEach(function (value) {
  assert.sameValue(value, expects.shift());
});

assert.sameValue(expects.length, 0, "The value of expects.length is 0");
assert.sameValue(combined.size, 3, "The combined set size is 3");
assert.sameValue(combined instanceof Set, true, "The returned object is a Set");
assert.sameValue(count, 0, "Add is never called");

Set.prototype.add = originalAdd;
