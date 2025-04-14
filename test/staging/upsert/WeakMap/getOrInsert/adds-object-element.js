// Copyright (C) 2025 Jonas Haukenes. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: proposal-upsert
description: |
  Adds a value with an Object key if key is not already in the map.
info: |
  WeakMap.prototype.getOrInsert ( key, value )

  ...
  5. Let p be the Record {[[Key]]: key, [[Value]]: value}.
  6. Append p to M.[[WeakMapData]].
  ...
features: [WeakMap]
flags: [noStrict]
---*/
// Copyright (C) 2015 the V8 project authors. All rights reserved.
var map = new WeakMap();
var foo = {};
var bar = {};
var baz = {};

map.getOrInsert(foo, 1);
map.getOrInsert(bar, 2);
map.getOrInsert(baz, 3);

assert.sameValue(map.has(foo), true);
assert.sameValue(map.has(bar), true);
assert.sameValue(map.has(baz), true);

assert.sameValue(map.get(foo), 1);
assert.sameValue(map.get(bar), 2);
assert.sameValue(map.get(baz), 3);

