// Copyright (C) 2022 Igalia, S.L. All rights reserved.
// Copyright (C) 2025 Jonas Haukenes. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: proposal-upsert
description: |
  Returns the value given as parameter when key is not present.
info: |
  WeakMap.prototype.getOrInsert ( key, value )

  ...
  4. For each Record { [[Key]], [[Value]] } p of M.[[WeakMapData]], do
    a. If p.[[Key]] is not empty and SameValue(p.[[Key]], key) is true, return p.[[Value]].
  5. Let p be the Record { [[Key]]: key, [[Value]]: value }.
  6. Append p to M.[[WeakMapData]].
  7. Return value.
features: [Symbol, WeakMap, symbols-as-weakmap-keys, upsert]
flags: [noStrict]
---*/
var foo = Symbol('a description');
var bar = Symbol('a description');
var baz = Symbol('different description');
var map = new WeakMap();

assert.sameValue(map.getOrInsert(foo, 0), 0, 'Regular symbol as key, added in constructor');

assert.sameValue(map.getOrInsert(baz, 2), 2, 'Regular symbol as key, added with set()');
assert.sameValue(map.getOrInsert(bar, 1), 1, "Symbols with the same description don't overwrite each other");

assert.sameValue(map.getOrInsert(Symbol.hasInstance, 3), 3, 'Well-known symbol as key');

