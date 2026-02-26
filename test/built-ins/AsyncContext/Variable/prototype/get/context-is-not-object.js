// Copyright (C) 2023 Igalia, S. L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-asynccontext-variable.prototype.get
description: >
  Throws a TypeError if `this` is not an Object.
info: |
  AsyncContext.Variable.prototype.get ( )

  1. Let asyncVariable be the this value.
  2. Perform ? RequireInternalSlot(asyncVariable, [[AsyncVariableDefaultValue]]).
  ...

  RequireInternalSlot(O, internalSlot)

  1. If O is not an Object, throw a TypeError exception.
  ...
features: [AsyncContext, Symbol]
---*/

assert.throws(TypeError, function () {
  AsyncContext.Variable.prototype.get.call(1);
});

assert.throws(TypeError, function () {
  AsyncContext.Variable.prototype.get.call(true);
});

assert.throws(TypeError, function () {
  AsyncContext.Variable.prototype.get.call('');
});

assert.throws(TypeError, function () {
  AsyncContext.Variable.prototype.get.call(null);
});

assert.throws(TypeError, function () {
  AsyncContext.Variable.prototype.get.call(undefined);
});

assert.throws(TypeError, function () {
  AsyncContext.Variable.prototype.get.call(Symbol());
});
