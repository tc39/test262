// Copyright (C) 2023 Anthony Frehner. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: pending
description: Set.union works on subclasses of Set, but returns an instance of Set even when Symbol.species is overridden.
---*/
var count = 0;
class MySet extends Set {
  static get [Symbol.species]() {
    count++;
    return Set;
  }
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
assert.sameValue(count, 0, "Symbol.species is never called");
assert.sameValue(combined instanceof Set, true, "The returned object is a Set");
assert.sameValue(
  combined instanceof MySet,
  false,
  "The returned object is a Set, not a subclass"
);
