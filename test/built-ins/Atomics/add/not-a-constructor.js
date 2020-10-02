// Copyright (C) 2020 Rick Waldron. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-ecmascript-standard-built-in-objects
description: >
  Atomics.add does not implement [[Construct]]
info: |
  ECMAScript Function Objects

  Built-in function objects that are not identified as constructors do not
  implement the [[Construct]] internal method unless otherwise specified in
  the description of a particular function.
includes: [isConstructor.js]
features: [Reflect.construct, Atomics, arrow-function, TypedArray, SharedArrayBuffer]
---*/

assert.sameValue(isConstructor(Atomics.add), false, 'isConstructor(Atomics.add) must return false');

assert.throws(TypeError, () => {
  new Atomics.add(new Int32Array(new SharedArrayBuffer(Int32Array.BYTES_PER_ELEMENT)));
}, '`new Atomics.add(new Int32Array(new SharedArrayBuffer(Int32Array.BYTES_PER_ELEMENT)))` throws TypeError');
    
