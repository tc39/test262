// Copyright (C) 2015 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-weakset.prototype.add
description: Returns `this` when new value is duplicate.
info: |
  WeakSet.prototype.add ( value )

  1. Let S be this value.
  ...
  6. Repeat for each e that is an element of entries,
    a. If e is not empty and SameValueZero(e, value) is true, then
    i. Return S.
  ...
features: [Symbol, WeakSet, permit-symbol-weakmap-key-weakset-entry-weakref-target]
---*/

var foo = {};
var bar = Symbol();
var s = new WeakSet([foo, bar]);

assert.sameValue(s.add(foo), s, '`s.add(foo)` returns `s`');
assert.sameValue(s.add(bar), s, '`s.add(bar)` returns `s`');
