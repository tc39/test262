// Copyright (C) 2020 Rick Waldron. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-ecmascript-standard-built-in-objects
description: >
  WeakMap.prototype.get does not implement [[Construct]]
info: |
  ECMAScript Function Objects

  Built-in function objects that are not identified as constructors do not
  implement the [[Construct]] internal method unless otherwise specified in
  the description of a particular function.
includes: [isConstructor.js]
features: [Reflect.construct, WeakMap, arrow-function]
---*/

assert.sameValue(
  isConstructor(WeakMap.prototype.get),
  false,
  'isConstructor(WeakMap.prototype.get) must return false'
);

assert.throws(TypeError, () => {
  let wm = new WeakMap(); new wm.get();
}, '`let wm = new WeakMap(); new wm.get()` throws TypeError');
    
