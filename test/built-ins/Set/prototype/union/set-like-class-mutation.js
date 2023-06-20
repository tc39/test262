// Copyright (C) 2023 Kevin Gibbons, Anthony Frehner. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: pending
description: Set.prototype.union maintains values even when a custom Set-like class mutates the receiver
features: [Set-methods]
includes: [compareArray.js]
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
assert.compareArray([...combined], expectedCombined);

const expectedNewBase = ["a", "d", "e", "b"];
assert.compareArray([...baseSet], expectedNewBase);
