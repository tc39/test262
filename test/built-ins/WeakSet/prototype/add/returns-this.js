// Copyright (C) 2015 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-weakset.prototype.add
description: Returns `this` after adding a new value.
info: |
  WeakSet.prototype.add ( value )

  1. Let S be this value.
  ...
  8. Return S.

features: [Symbol, WeakSet, permit-symbol-weakmap-key-weakset-entry-weakref-target]
---*/

var s = new WeakSet();

assert.sameValue(s.add({}), s, '`s.add({})` returns `s`');
assert.sameValue(s.add(Symbol()), s, '`s.add(Symbol())` returns `s`');
