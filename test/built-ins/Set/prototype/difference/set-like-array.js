// Copyright (C) 2023 Kevin Gibbons, Anthony Frehner and Kevin Gibbons. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-set.prototype.difference
description: Set.prototype.difference consumes a set-like array as a set-like, not an array
features: [set-methods]
includes: [compareArray.js]
---*/

const s1 = new Set([1, 2]);
const s2 = [5, 6];
s2.size = 3;
s2.has = function (v) {
  if (v === 1) return false;
  if (v === 2) return true;
  throw new Test262Error("Set.prototype.difference should only call its argument's has method with contents of this");
};
s2.keys = function () {
  throw new Test262Error("Set.prototype.difference should not call its argument's keys iterator when this.size ≤ arg.size");
};

const expected = [1];
const combined = s1.difference(s2);

assert.compareArray([...combined], expected);
assert.sameValue(combined instanceof Set, true, "The returned object is a Set");
