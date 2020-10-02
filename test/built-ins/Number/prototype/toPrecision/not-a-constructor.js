// Copyright (C) 2020 Rick Waldron. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-ecmascript-standard-built-in-objects
description: >
  Number.prototype.toPrecision does not implement [[Construct]]
info: |
  ECMAScript Function Objects

  Built-in function objects that are not identified as constructors do not
  implement the [[Construct]] internal method unless otherwise specified in
  the description of a particular function.
includes: [isConstructor.js]
features: [Reflect.construct, arrow-function]
---*/

assert.sameValue(
  isConstructor(Number.prototype.toPrecision),
  false,
  'isConstructor(Number.prototype.toPrecision) must return false'
);

assert.throws(TypeError, () => {
  new Number.prototype.toPrecision();
}, '`new Number.prototype.toPrecision()` throws TypeError');
    
