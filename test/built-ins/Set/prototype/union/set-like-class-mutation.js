// Copyright (C) 2023 Kevin Gibbons, Anthony Frehner. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: pending
description: Set.prototype.union maintains values even when a custom Set-like class mutates the receiver
features: [Set-methods]
---*/

const baseSet = new Set(["a", "b", "c", "d", "e"]);

function mutatingIterator() {
  let index = 0;
  let values = ["x", "y"];
  return {
    next() {
      baseSet.delete("b");
      baseSet.delete("c");
      baseSet.add("b");
      baseSet.add("d");
      return {
        done: index >= 2,
        value: values[index++],
      };
    },
  };
}

const evilSetLike = {
  size: 2,
  has() {},
  keys() {
    return mutatingIterator();
  },
};

const combined = baseSet.union(evilSetLike);
const expectedCombined = ["a", "b", "c", "d", "e", "x", "y"];

combined.forEach(function (value) {
  assert.sameValue(value, expectedCombined.shift());
});
assert.sameValue(
  expectedCombined.length,
  0,
  "The value of expectedCombined.length is 0"
);

const expectedNewBase = ["a", "d", "e", "b"];
baseSet.forEach(function (value) {
  assert.sameValue(value, expectedNewBase.shift());
});
assert.sameValue(
  expectedNewBase.length,
  0,
  "The value of expectedNewBase.length is 0"
);
