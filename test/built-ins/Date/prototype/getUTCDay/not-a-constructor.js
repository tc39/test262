// Copyright (C) 2020 Rick Waldron. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-ecmascript-standard-built-in-objects
description: >
  Date.prototype.getUTCDay does not implement [[Construct]]
info: |
  ECMAScript Function Objects

  Built-in function objects that are not identified as constructors do not
  implement the [[Construct]] internal method unless otherwise specified in
  the description of a particular function.
includes: [isConstructor.js]
features: [Reflect.construct, arrow-function]
---*/

assert.sameValue(
  isConstructor(Date.prototype.getUTCDay),
  false,
  'isConstructor(Date.prototype.getUTCDay) must return false'
);

assert.throws(TypeError, () => {
  let date = new Date(Date.now()); new date.getUTCDay();
}, '`let date = new Date(Date.now()); new date.getUTCDay()` throws TypeError');
    
