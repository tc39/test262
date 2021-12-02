// Copyright (C) 2020 Rick Waldron. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-weakset.prototype.has
description: >
  Returns true when value is present in the WeakSet entries list.
info: |
  WeakSet.prototype.has ( value )

  ...
  6. Repeat for each e that is an element of entries,
    a. If e is not empty and SameValue(e, value) is true, return true.
  ...

features: [Symbol, WeakSet, permit-symbol-weakmap-key-weakset-entry-weakref-target]
---*/

var foo = Symbol();
var s = new WeakSet();

s.add(foo);
assert.sameValue(s.has(foo), true);
