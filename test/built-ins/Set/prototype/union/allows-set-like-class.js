// Copyright (C) 2023 Anthony Frehner. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: pending
description: GetSetRecord allows Set-like objects
info: |
    1. If obj is not an Object, throw a TypeError exception.
    2. Let rawSize be ? Get(obj, "size").
    ...
    7. Let has be ? Get(obj, "has").
    ...
    9. Let keys be ? Get(obj, "keys").
---*/

class MySetLike {
  size = 2;
  has = () => {};
  keys = function* keys() {
    yield 2;
    yield 3;
  };
}

const s1 = new Set([1, 2]);
const s2 = new MySetLike();
const expects = [1, 2, 3];
const combined = s1.union(s2);

combined.forEach(function (value) {
  assert.sameValue(value, expects.shift());
});

assert.sameValue(expects.length, 0, "The value of expects.length is 0");
assert.sameValue(combined.size, 3, "The combined set size is 3");
assert.sameValue(combined instanceof Set, true, "The returned object is a Set");
