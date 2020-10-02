// Copyright (C) 2020 Rick Waldron. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-ecmascript-standard-built-in-objects
description: >
  ArrayBuffer.prototype.slice does not implement [[Construct]]
info: |
  ECMAScript Function Objects

  Built-in function objects that are not identified as constructors do not
  implement the [[Construct]] internal method unless otherwise specified in
  the description of a particular function.
includes: [isConstructor.js]
features: [Reflect.construct, ArrayBuffer, arrow-function]
---*/

assert.sameValue(
  isConstructor(ArrayBuffer.prototype.slice),
  false,
  'isConstructor(ArrayBuffer.prototype.slice) must return false'
);

assert.throws(TypeError, () => {
  let ab = new ArrayBuffer(); new ab.slice();
}, '`let ab = new ArrayBuffer(); new ab.slice()` throws TypeError');
    
