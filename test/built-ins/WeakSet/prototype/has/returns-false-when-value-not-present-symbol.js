// Copyright (C) 2020 Rick Waldron. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-weakset.prototype.has
description: >
  Return false when value is not present in the WeakSet entries.
info: |
  WeakSet.prototype.has ( value )

  ...
  7. Return false.
features: [Symbol, WeakSet, permit-symbol-weakmap-key-weakset-entry]
---*/

var foo = Symbol();
var bar = Symbol();
var s = new WeakSet();

assert.sameValue(s.has(foo), false);

s.add(foo);
assert.sameValue(s.has(bar), false);

s.delete(foo);
assert.sameValue(s.has(foo), false);
