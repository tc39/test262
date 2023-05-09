// Copyright (C) 2023 Anthony Frehner. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: pending
description: Set.union works on subclasses of Set, but never calls the receiver's size/has/keys methods
features: [Set-methods]
---*/

let sizeCount = 0;
let hasCount = 0;
let keysCount = 0;

class MySet extends Set {
  size = function (...rest) {
    sizeCount++;
    super.size(...rest);
  };

  has = function (...rest) {
    hasCount++;
    super.has(...rest);
  };

  keys = function (...rest) {
    keysCount++;
    super.keys(...rest);
  };
}

const s1 = new MySet([1, 2]);
const s2 = new Set([2, 3]);
const expects = [1, 2, 3];
const combined = s1.union(s2);

combined.forEach(function (value) {
  assert.sameValue(value, expects.shift());
});

assert.sameValue(expects.length, 0, "The value of expects.length is 0");
assert.sameValue(combined.size, 3, "The combined set size is 3");
assert.sameValue(combined instanceof Set, true, "The returned object is a Set");
assert.sameValue(
  combined instanceof MySet,
  false,
  "The returned object is a Set, not a subclass"
);
assert.sameValue(sizeCount, 0, "size should not be called on the receiver");
assert.sameValue(hasCount, 0, "has should not be called on the receiver");
assert.sameValue(keysCount, 0, "keys should not be called on the receiver");
