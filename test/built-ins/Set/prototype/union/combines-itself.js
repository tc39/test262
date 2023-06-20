// Copyright (C) 2023 Anthony Frehner. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: pending
description: Set.prototype.union is successful when called on itself
features: [Set-methods]
includes: [compareArray.js]
---*/

const s1 = new Set([1, 2]);
const expects = [1, 2];
const combined = s1.union(s1);

assert.compareArray([...combined], expects);
assert.sameValue(combined instanceof Set, true, "The returned object is a Set");
