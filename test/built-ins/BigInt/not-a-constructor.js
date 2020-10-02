// Copyright (C) 2020 Rick Waldron. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-ecmascript-standard-built-in-objects
description: >
  BigInt does not implement [[Construct]]
info: |
  ECMAScript Function Objects

  Built-in function objects that are not identified as constructors do not
  implement the [[Construct]] internal method unless otherwise specified in
  the description of a particular function.
includes: [isConstructor.js]
features: [BigInt, Reflect.construct, arrow-function]
---*/

assert.sameValue(
  isConstructor(BigInt),
  false,
  'isConstructor(BigInt) must return false'
);

assert.throws(TypeError, () => {
  new BigInt(1n);
}, '`new BigInt(1n)` throws TypeError');

