// Copyright (C) 2023 Igalia, S. L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-asynccontext-variable.prototype.run
description: >
  Throws a TypeError if `this` is not an Object.
info: |
  AsyncContext.Variable.prototype.run ( value, func, ...args )

  1. Let asyncVariable be the this value.
  2. Perform ? RequireInternalSlot(asyncVariable, [[AsyncVariableName]]).
  ...

  RequireInternalSlot(O, internalSlot)

  1. If O is not an Object, throw a TypeError exception.
  ...
features: [AsyncContext, Symbol]
---*/

assert.throws(TypeError, function () {
  AsyncContext.Variable.prototype.run.call(1);
});

assert.throws(TypeError, function () {
  AsyncContext.Variable.prototype.run.call(true);
});

assert.throws(TypeError, function () {
  AsyncContext.Variable.prototype.run.call('');
});

assert.throws(TypeError, function () {
  AsyncContext.Variable.prototype.run.call(null);
});

assert.throws(TypeError, function () {
  AsyncContext.Variable.prototype.run.call(undefined);
});

assert.throws(TypeError, function () {
  AsyncContext.Variable.prototype.run.call(Symbol());
});
