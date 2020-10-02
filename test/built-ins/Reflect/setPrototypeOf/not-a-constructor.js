// Copyright (C) 2020 Rick Waldron. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-ecmascript-standard-built-in-objects
description: >
  Reflect.setPrototypeOf does not implement [[Construct]]
info: |
  ECMAScript Function Objects

  Built-in function objects that are not identified as constructors do not
  implement the [[Construct]] internal method unless otherwise specified in
  the description of a particular function.
includes: [isConstructor.js]
features: [Reflect.construct, Reflect, Reflect.setPrototypeOf, arrow-function]
---*/

assert.sameValue(
  isConstructor(Reflect.setPrototypeOf),
  false,
  'isConstructor(Reflect.setPrototypeOf) must return false'
);

assert.throws(TypeError, () => {
  new Reflect.setPrototypeOf({}, {});
}, '`new Reflect.setPrototypeOf({}, {})` throws TypeError');
    
