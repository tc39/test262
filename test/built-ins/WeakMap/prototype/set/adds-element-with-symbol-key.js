// Copyright (C) 2020 Rick Waldron. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-weakmap.prototype.set
description: >
  Appends value as the last element of entries.
info: |
  WeakMap.prototype.set ( key, value )

  ...
  7. Let p be the Record {[[key]]: key, [[value]]: value}.
  8. Append p as the last element of entries.
  ...
features: [Symbol, WeakMap, permit-symbol-weakmap-key-weakset-entry-weakref-target]
---*/

var map = new WeakMap();
var foo = Symbol();
var bar = Symbol();
var baz = Symbol();

map.set(foo, 1);
map.set(bar, 2);
map.set(baz, 3);

assert(map.has(foo));
assert(map.has(bar));
assert(map.has(baz));
