// Copyright (C) 2023 Anthony Frehner. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: pending
description: Set.prototype.union converts -0𝔽 to +0𝔽
info: |
    7.b.ii. If nextValue is -0𝔽, set nextValue to +0𝔽.
features: [Set-methods]
---*/

const s1 = new Set([1]);
const s2 = new Set([-0]);
let expects = [1, +0];
let combined = s1.union(s2);

combined.forEach(function (value) {
  assert.sameValue(value, expects.shift());
});

assert.sameValue(expects.length, 0, "The value of expects.length is 0");
assert.sameValue(combined.size, 2, "The combined set size is 2");
assert.sameValue(combined instanceof Set, true, "The returned object is a Set");

const s3 = new Set([+0]);
const s4 = new Set([-0]);
expects = [+0];
combined = s3.union(s4);

combined.forEach(function (value) {
  assert.sameValue(value, expects.shift());
});

assert.sameValue(expects.length, 0, "The value of expects.length is 0");
assert.sameValue(combined.size, 1, "The combined set size is 1");
assert.sameValue(combined instanceof Set, true, "The returned object is a Set");

const s5 = new Set([-0]);
const s6 = new Set([1]);
expects = [+0, 1];
combined = s5.union(s6);

combined.forEach(function (value) {
  assert.sameValue(value, expects.shift());
});

assert.sameValue(expects.length, 0, "The value of expects.length is 0");
assert.sameValue(combined.size, 2, "The combined set size is 2");
assert.sameValue(combined instanceof Set, true, "The returned object is a Set");
