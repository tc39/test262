// Copyright (C) 2023 Anthony Frehner. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: pending
description: Set.prototype.union can combine empty Sets
---*/

const s1 = new Set([]);
const s2 = new Set([1, 2]);
let expects = [1, 2];
let combined = s1.union(s2);

combined.forEach(function (value) {
  assert.sameValue(value, expects.shift());
});

assert.sameValue(expects.length, 0, "The value of expects.length is 0");
assert.sameValue(combined.size, 2, "The combined set size is 2");
assert.sameValue(combined instanceof Set, true, "The returned object is a Set");

const s3 = new Set([1, 2]);
const s4 = new Set([]);
expects = [1, 2];
combined = s3.union(s4);

combined.forEach(function (value) {
  assert.sameValue(value, expects.shift());
});

assert.sameValue(expects.length, 0, "The value of expects.length is 0");
assert.sameValue(combined.size, 2, "The combined set size is 2");
assert.sameValue(combined instanceof Set, true, "The returned object is a Set");
