// Copyright (C) 2023 Anthony Frehner. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: pending
description: Set.prototype.union can combine empty Sets
features: [Set-methods]
includes: [compareArray.js]
---*/

const s1 = new Set([]);
const s2 = new Set([1, 2]);
let expects = [1, 2];
let combined = s1.union(s2);

assert.compareArray([...combined], expects);
assert.sameValue(combined instanceof Set, true, "The returned object is a Set");

const s3 = new Set([1, 2]);
const s4 = new Set([]);
expects = [1, 2];
combined = s3.union(s4);

assert.compareArray([...combined], expects);
assert.sameValue(combined instanceof Set, true, "The returned object is a Set");

const s5 = new Set([]);
const s6 = new Set([]);
expects = [];
combined = s5.union(s6);

assert.compareArray([...combined], expects);
assert.sameValue(combined instanceof Set, true, "The returned object is a Set");
