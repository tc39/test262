// Copyright (C) 2023 Igalia, S. L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-asynccontext-snapshot.prototype.run
description: >
  Throws a TypeError if `this` is an AsyncContext.Variable object.
info: |
  AsyncContext.Snapshot.prototype.run ( func, ...args )

  1. Let asyncSnapshot be the this value.
  2. Perform ? RequireInternalSlot(asyncSnapshot, [[AsyncSnapshotMapping]]).
  ...

  RequireInternalSlot(O, internalSlot)

  ...
  2. If O does not have an internalSlot internal slot, throw a TypeError exception.
  ...
features: [AsyncContext]
---*/

assert.throws(TypeError, function () {
  AsyncContext.Snapshot.prototype.run.call(new AsyncContext.Variable());
});
