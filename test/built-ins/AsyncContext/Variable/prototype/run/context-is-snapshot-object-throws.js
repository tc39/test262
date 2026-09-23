// Copyright (C) 2023 Igalia, S. L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-asynccontext-variable.prototype.run
description: >
  Throws a TypeError if `this` is an AsyncContext.Snapshot object.
info: |
  AsyncContext.Variable.prototype.run ( value, func, ...args )

  1. Let asyncVariable be the this value.
  2. Perform ? RequireInternalSlot(asyncVariable, [[AsyncVariableName]]).
  ...

  RequireInternalSlot(O, internalSlot)

  ...
  2. If O does not have an internalSlot internal slot, throw a TypeError exception.
  ...
features: [AsyncContext]
---*/

assert.throws(TypeError, function () {
  AsyncContext.Variable.prototype.run.call(new AsyncContext.Snapshot());
});
