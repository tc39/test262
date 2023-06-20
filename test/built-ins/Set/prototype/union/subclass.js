// Copyright (C) 2023 Anthony Frehner. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: pending
description: Set.union works on subclasses of Set, but returns an instance of Set
features: [Set-methods]
includes: [compareArray.js]
---*/

class MySet extends Set {}

const s1 = new MySet([1, 2]);
const s2 = new Set([2, 3]);
const expects = [1, 2, 3];
const combined = s1.union(s2);

assert.compareArray([...combined], expects);
assert.sameValue(combined instanceof Set, true, "The returned object is a Set");
assert.sameValue(
  combined instanceof MySet,
  false,
  "The returned object is a Set, not a subclass"
);
