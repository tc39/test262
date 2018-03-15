// Copyright (C) 2018 Amal Hussein. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-atomics.wait
description: >
  False timeout arg should result in a timeout value of 1
info: |
  Atomics.wait( typedArray, index, value, timeout )

  4.Let q be ? ToNumber(timeout).
    ...
    Symbol	Throw a TypeError exception.
features: [ Atomics ]
---*/

var sab = new SharedArrayBuffer(1024);
var int32Array = new Int32Array(sab);

assert.throws(TypeError, function() {
  Atomics.wait(int32Array, 0, 0, Symbol('foo'))
}, 'Symbol');

assert.sameValue(Atomics.wake(int32Array, 0), 0);
