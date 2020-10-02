// Copyright (C) 2020 Rick Waldron. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-ecmascript-standard-built-in-objects
description: >
  Set.prototype.forEach does not implement [[Construct]]
info: |
  ECMAScript Function Objects

  Built-in function objects that are not identified as constructors do not
  implement the [[Construct]] internal method unless otherwise specified in
  the description of a particular function.
includes: [isConstructor.js]
features: [Reflect.construct, Set, arrow-function]
---*/

assert.sameValue(
  isConstructor(Set.prototype.forEach),
  false,
  'isConstructor(Set.prototype.forEach) must return false'
);

assert.throws(TypeError, () => {
  let s = new Set([]); new s.forEach(() => {});
}, '`let s = new Set([]); new s.forEach(() => {})` throws TypeError');
    
