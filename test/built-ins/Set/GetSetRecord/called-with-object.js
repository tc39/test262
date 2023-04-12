// Copyright (C) 2023 Anthony Frehner. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: pending
description: GetSetRecord throws if obj is not an object
info: |
    1. If obj is not an Object, throw a TypeError exception.
---*/

assert.throws(
  TypeError,
  function () {
    const s1 = new Set([1]);
    s1.union(1);
  },
  "Set.prototype.union must be called with an object"
);

assert.throws(
  TypeError,
  function () {
    const s1 = new Set([1]);
    s1.union("");
  },
  "Set.prototype.union must be called with an object"
);

assert.throws(
  TypeError,
  function () {
    const s1 = new Set([1]);
    s1.union(1n);
  },
  "Set.prototype.union must be called with an object"
);

assert.throws(
  TypeError,
  function () {
    const s1 = new Set([1]);
    s1.union(false);
  },
  "Set.prototype.union must be called with an object"
);

assert.throws(
  TypeError,
  function () {
    const s1 = new Set([1]);
    s1.union(undefined);
  },
  "Set.prototype.union must be called with an object"
);

assert.throws(
  TypeError,
  function () {
    const s1 = new Set([1]);
    s1.union(null);
  },
  "Set.prototype.union must be called with an object"
);

assert.throws(
  TypeError,
  function () {
    const s1 = new Set([1]);
    s1.union(Symbol("test"));
  },
  "Set.prototype.union must be called with an object"
);
