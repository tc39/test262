// Copyright (C) 2015 the V8 project authors. All rights reserved.
// Copyright (C) 2024 Sune Eriksson Lianes, Mathias Ness. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: proposal-upsert
description: |
  Returns the value set before getOrInsertComputed from the specified key on different types.
info: |
  Map.prototype.getOrInsertComputed ( key , callbackfn )

  ...
  5. For each Record { [[Key]], [[Value]] } p of M.[[MapData]], do
    a. If p.[[Key]] is not empty and SameValue(p.[[Key]], key) is true, return p.[[Value]].
  ...
features: [Symbol, arrow-function, upsert]
flags: [noStrict]
---*/
var map = new Map();

map.set('bar', 0);
assert.sameValue(map.get('bar'), map.getOrInsertComputed('bar', () => 1));
assert.sameValue(0, map.getOrInsertComputed('bar', () =>  1));

map.set(1, 42);
assert.sameValue(map.get(1), map.getOrInsertComputed(1, () => 43));
assert.sameValue(42, map.getOrInsertComputed(1, () => 43));

map.set(NaN, 1);
assert.sameValue(map.get(NaN), map.getOrInsertComputed(NaN, () => 2));
assert.sameValue(1, map.getOrInsertComputed(NaN, () => 2));

var item = {};
map.set(item, 2);
assert.sameValue(map.get(item), map.getOrInsertComputed(item, () => 3));
assert.sameValue(2, map.getOrInsertComputed(item, () => 3));

item = [];
map.set(item, 3);
assert.sameValue(map.get(item), map.getOrInsertComputed(item, () => 4));
assert.sameValue(3, map.getOrInsertComputed(item, () => 4));

item = Symbol('item');
map.set(item, 4);
assert.sameValue(map.get(item), map.getOrInsertComputed(item, () => 5));
assert.sameValue(4, map.getOrInsertComputed(item, () => 5));

item = null;
map.set(item, 5);
assert.sameValue(map.get(item), map.getOrInsertComputed(item, () => 6));
assert.sameValue(5, map.getOrInsertComputed(item, () => 6));

item = undefined;
map.set(item, 6);
assert.sameValue(map.get(item), map.getOrInsertComputed(item, () => 7));
assert.sameValue(6, map.getOrInsertComputed(item, () => 7));

