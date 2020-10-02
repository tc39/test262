// Copyright (C) 2020 Rick Waldron. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-ecmascript-standard-built-in-objects
description: >
  BigInt.prototype.toString does not implement [[Construct]]
info: |
  ECMAScript Function Objects

  Built-in function objects that are not identified as constructors do not
  implement the [[Construct]] internal method unless otherwise specified in
  the description of a particular function.
includes: [isConstructor.js]
features: [Reflect.construct, BigInt, arrow-function]
---*/
assert.sameValue(
  isConstructor(BigInt.prototype.toString),
  false,
  'isConstructor(BigInt.prototype.toString) must return false'
);

assert.throws(TypeError, () => {
  let n = 1n;
  new n.toString();
}, '`let n = 1n; new n.toString()` throws TypeError');
