// Copyright (C) 2024 Justin Dorfman. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-addrestrictedfunctionproperties
description: >
  Function.prototype.arguments is an accessor property whose set and get
  functions are both %ThrowTypeError%.
info: |
  2. Let _thrower_ be _realm_.[[Intrinsics]].[[%ThrowTypeError%]].
  3. Perform ! DefinePropertyOrThrow(_F_, *"caller"*, PropertyDescriptor { [[Get]]: _thrower_, [[Set]]: _thrower_, [[Enumerable]]: *false*, [[Configurable]]: *true* }).
  4. Perform ! DefinePropertyOrThrow(_F_, *"arguments"*, PropertyDescriptor { [[Get]]: _thrower_, [[Set]]: _thrower_, [[Enumerable]]: *false*, [[Configurable]]: *true* }).
includes: [propertyHelper.js]
---*/

const argumentsDesc = Object.getOwnPropertyDescriptor(Function.prototype, 'arguments');

verifyProperty(Function.prototype, "arguments", {
  enumerable: false,
  configurable: true
});

assert.sameValue(typeof argumentsDesc.get, "function",
  "Function.prototype.arguments has function getter");
assert.sameValue(typeof argumentsDesc.set, "function",
  "Function.prototype.arguments has function setter");
assert.sameValue(argumentsDesc.get, argumentsDesc.set,
  "Arguments property getter/setter are the same function");
