// Copyright (C) 2023 Igalia, S. L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-asynccontext-variable.prototype.name
description: >
  Throws a TypeError if `this` is not an Object.
info: |
  get AsyncContext.Variable.prototype.name

  1. Let asyncVariable be the this value.
  2. Perform ? RequireInternalSlot(asyncVariable, [[AsyncVariableDefaultValue]]).
  ...

  RequireInternalSlot ( O, internalSlot )

  1. If O is not an Object, throw a TypeError exception.
  ...

features: [Symbol, AsyncContext]
---*/

var descriptor = Object.getOwnPropertyDescriptor(AsyncContext.Variable.prototype, 'name');

assert.throws(TypeError, function () {
  descriptor.get.call(1);
});

assert.throws(TypeError, function () {
  descriptor.get.call(false);
});

assert.throws(TypeError, function () {
  descriptor.get.call(1);
});

assert.throws(TypeError, function () {
  descriptor.get.call('');
});

assert.throws(TypeError, function () {
  descriptor.get.call(undefined);
});

assert.throws(TypeError, function () {
  descriptor.get.call(null);
});

assert.throws(TypeError, function () {
  descriptor.get.call(Symbol());
});
