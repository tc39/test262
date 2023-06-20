// Copyright (C) 2023 Anthony Frehner. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: pending
description: Set.prototype.union appends new values to a copy of the original Set
info: |
    7.b.iii.1 Append nextValue to resultSetData.
features: [Set-methods]
includes: [compareArray.js]
---*/

const s1 = new Set([1, 2]);
const s2 = new Set([-1, 0, 3]);
const expects = [1, 2, -1, 0, 3];
const combined = s1.union(s2);

assert.compareArray([...combined], expects);
assert.sameValue(combined instanceof Set, true, "The returned object is a Set");

const s3 = new Set([1, 2, -3]);
const s4 = new Set([-1, 0]);
const expects2 = [1, 2, -3, -1, 0];
const combined2 = s3.union(s4);

assert.compareArray([...combined2], expects2);
assert.sameValue(
  combined2 instanceof Set,
  true,
  "The returned object is a Set"
);
