// Copyright (C) 2020 Rick Waldron. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-weakmap.prototype.has
description: >
  Returns true when value is present in the WeakMap entries list. Key is a Symbol
info: |
  WeakMap.prototype.has ( value )

  ...
  6. Repeat for each Record {[[key]], [[value]]} p that is an element of
  entries,
    a. If p.[[key]] is not empty and SameValue(p.[[key]], key) is true, return
    true.
  ...
features: [Symbol, WeakMap, permit-symbol-weakmap-key-weakset-entry-weakref-target]
---*/

var foo = Symbol();
var map = new WeakMap();

map.set(foo, 1);
assert.sameValue(map.has(foo), true);
