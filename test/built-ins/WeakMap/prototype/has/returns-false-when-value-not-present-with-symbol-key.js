// Copyright (C) 2020 Rick Waldron. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-weakmap.prototype.has
description: >
  Return false when value is not present in the WeakMap entries. Key is a Symbol
info: |
  WeakMap.prototype.has ( value )

  ...
  7. Return false.

features: [Symbol, WeakMap, permit-symbol-weakmap-key-weakset-entry]
---*/

var foo = Symbol();
var bar = Symbol();
var map = new WeakMap();

assert.sameValue(map.has(foo), false);

map.set(foo, 1);
assert.sameValue(map.has(bar), false);

map.delete(foo);
assert.sameValue(map.has(foo), false);
