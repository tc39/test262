// Copyright (C) 2020 Rick Waldron. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-weakset.prototype.add
description: >
  Appends value as the last element of entries. Value is Symbol
info: |
  WeakSet.prototype.add ( value )

  ...
  7. Append value as the last element of entries.
  ...
features: [Symbol, WeakSet, permit-symbol-weakmap-key-weakset-entry]
---*/

var s = new WeakSet();
var foo = Symbol();
var bar = Symbol();
var baz = Symbol();

s.add(foo);
s.add(bar);
s.add(baz);

assert(s.has(foo));
assert(s.has(bar));
assert(s.has(baz));
