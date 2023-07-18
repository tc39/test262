// Copyright (C) 2023 Igalia, S. L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-asynccontext-variable.prototype.name
description: >
  Throws a TypeError if `this` object does not have an [[AsyncVariableName]]
  internal slot, which also applies to AsyncContext.Snapshot objects.
info: |
  get AsyncContext.Variable.prototype.name

  1. Let asyncVariable be the this value.
  2. Perform ? RequireInternalSlot(asyncVariable, [[AsyncVariableName]]).
  ...
features: [AsyncContext]
---*/

var descriptor = Object.getOwnPropertyDescriptor(AsyncContext.Variable.prototype, 'name');

var asyncVariable = new AsyncContext.Variable();

// Does not throw
descriptor.get.call(asyncVariable);

assert.throws(TypeError, function () {
  descriptor.get.call(new AsyncContext.Snapshot());
});
