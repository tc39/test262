// Copyright (C) 2023 Anthony Frehner. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: pending
description: Set.prototype.union appends new values to a copy of the original Set
info: |
    7.b.iii.1 Append nextValue to resultSetData.
---*/

const s1 = new Set([1, 2]);
const s2 = new Set([-1, 0, 3]);
const expects = [1, 2, -1, 0, 3];
const combined = s1.union(s2);

combined.forEach(function (value) {
  assert.sameValue(value, expects.shift());
});

assert.sameValue(expects.length, 0, "The value of expects.length is 0");
assert.sameValue(combined.size, 5, "The combined set size is 3");
assert.sameValue(combined instanceof Set, true, "The returned object is a Set");

const s3 = new Set([1, 2, -3]);
const s4 = new Set([-1, 0]);
const expects2 = [1, 2, -3, -1, 0];
const combined2 = s3.union(s4);

combined2.forEach(function (value) {
  assert.sameValue(value, expects2.shift());
});

assert.sameValue(expects2.length, 0, "The value of expects.length is 0");
assert.sameValue(combined2.size, 5, "The combined set size is 3");
assert.sameValue(
  combined2 instanceof Set,
  true,
  "The returned object is a Set"
);
