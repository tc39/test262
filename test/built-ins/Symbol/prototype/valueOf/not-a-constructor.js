// Copyright (C) 2020 Rick Waldron. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-ecmascript-standard-built-in-objects
description: >
  Symbol.prototype.valueOf does not implement [[Construct]]
info: |
  ECMAScript Function Objects

  Built-in function objects that are not identified as constructors do not
  implement the [[Construct]] internal method unless otherwise specified in
  the description of a particular function.
includes: [isConstructor.js]
features: [Reflect.construct, Symbol, arrow-function]
---*/

assert.sameValue(
  isConstructor(Symbol.prototype.valueOf),
  false,
  'isConstructor(Symbol.prototype.valueOf) must return false'
);

assert.throws(TypeError, () => {
  let symbol = Symbol(); new symbol.valueOf();
}, '`let symbol = Symbol(); new symbol.valueOf()` throws TypeError');
    
