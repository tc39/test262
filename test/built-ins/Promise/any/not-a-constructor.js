// Copyright (C) 2020 Rick Waldron. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-ecmascript-standard-built-in-objects
description: >
  Promise.any does not implement [[Construct]]
info: |
  ECMAScript Function Objects

  Built-in function objects that are not identified as constructors do not
  implement the [[Construct]] internal method unless otherwise specified in
  the description of a particular function.
includes: [isConstructor.js]
features: [Reflect.construct, Promise.any, arrow-function]
---*/

assert.sameValue(isConstructor(Promise.any), false, 'isConstructor(Promise.any) must return false');

assert.throws(TypeError, () => {
  new Promise.any([1]);
}, '`new Promise.any([1])` throws TypeError');
    
