// Copyright (C) 2023 Anthony Frehner. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: pending
description: Set.prototype.union should not call Set.prototype.add
features: [Set-methods]
includes: [compareArray.js]
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

assert.compareArray([...combined], expects);
assert.sameValue(combined instanceof Set, true, "The returned object is a Set");
assert.sameValue(count, 0, "Add is never called");

Set.prototype.add = originalAdd;
