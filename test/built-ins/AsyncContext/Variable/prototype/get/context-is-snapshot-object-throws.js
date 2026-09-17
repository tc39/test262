// Copyright (C) 2023 Igalia, S. L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-asynccontext-variable.prototype.get
description: >
  Throws a TypeError if `this` is an AsyncContext.Snapshot object.
info: |
  AsyncContext.Variable.prototype.get ( )

  1. Let asyncVariable be the this value.
  2. Perform ? RequireInternalSlot(asyncVariable, [[AsyncVariableDefaultValue]]).
  ...

  RequireInternalSlot(O, internalSlot)

  ...
  2. If O does not have an internalSlot internal slot, throw a TypeError exception.
  ...
features: [AsyncContext]
---*/

assert.throws(TypeError, function () {
  AsyncContext.Variable.prototype.get.call(new AsyncContext.Snapshot());
});
