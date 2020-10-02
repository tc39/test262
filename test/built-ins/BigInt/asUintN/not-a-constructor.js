// Copyright (C) 2020 Rick Waldron. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-ecmascript-standard-built-in-objects
description: >
  BigInt.asUintN does not implement [[Construct]]
info: |
  ECMAScript Function Objects

  Built-in function objects that are not identified as constructors do not
  implement the [[Construct]] internal method unless otherwise specified in
  the description of a particular function.
includes: [isConstructor.js]
features: [Reflect.construct, BigInt, arrow-function]
---*/
assert.sameValue(isConstructor(BigInt.asUintN), false, 'isConstructor(BigInt.asUintN) must return false');

assert.throws(TypeError, () => {
  new BigInt.asUintN(64, 1n);
}, '`new BigInt.asUintN(64, 1n)` throws TypeError');
