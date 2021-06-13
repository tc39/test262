// Copyright (C) 2015 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-weakmap.prototype.set
description: Throws TypeError if `key` is not Object or Symbol
info: |
  WeakMap.prototype.set ( key, value )

  5. If HasIdentity(_value_) is *false*, throw a *TypeError* exception.

features: [Symbol, WeakMap]
---*/

var s = new WeakMap();

assert.throws(TypeError, function() {
  s.set(1, 1);
});

assert.throws(TypeError, function() {
  s.set(false, 1);
});

assert.throws(TypeError, function() {
  s.set(undefined, 1);
});

assert.throws(TypeError, function() {
  s.set('string', 1);
});

assert.throws(TypeError, function() {
  s.set(null, 1);
});
