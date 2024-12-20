// Copyright (C) 2024 Justin Dorfman. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-function.prototype.arguments
description: >
  Function.prototype.arguments property descriptor
info: |
  Function.prototype.arguments is an accessor property whose set and get
  accessor functions are both %ThrowTypeError%.
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
