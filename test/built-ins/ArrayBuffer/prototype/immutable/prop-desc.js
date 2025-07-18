// Copyright (C) 2025 Richard Gibson. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-get-arraybuffer.prototype.immutable
description: Checks the "immutable" property of ArrayBuffer.prototype.
info: |
  ArrayBuffer.prototype.immutable is an accessor property whose set accessor
  function is undefined.

  ECMAScript Standard Built-in Objects
  ...
  For functions that are specified as properties of objects, the name value is
  the property name string used to access the function. Functions that are
  specified as get or set accessor functions of built-in properties have "get"
  or "set" (respectively) passed to the prefix parameter when calling
  CreateBuiltinFunction.
  ...
  Every accessor property described in clauses 19 through 28 and in Annex B.2
  has the attributes { [[Enumerable]]: false, [[Configurable]]: true } unless
  otherwise specified. If only a get accessor function is described, the set
  accessor function is the default value, undefined.
features: [immutable-arraybuffer]
includes: [propertyHelper.js]
---*/

var desc = Object.getOwnPropertyDescriptor(ArrayBuffer.prototype, "immutable");
var isHardened = Object.isFrozen(Object);

assert.sameValue(desc.value, undefined);
assert.sameValue(desc.set, undefined);
verifyCallableProperty(desc, "get", "get immutable", 0, { configurable: !isHardened });

verifyPrimordialProperty(ArrayBuffer.prototype, "immutable", {
  enumerable: false,
  configurable: true
});
