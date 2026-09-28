// Copyright (C) 2024 Igalia, S. L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-properties-of-the-asynccontext-snapshot-prototype-object
description: |
  The prototype of AsyncContext.Snapshot.prototype is Object.prototype.
info: |
  The value of the [[Prototype]] internal slot of the AsyncContext.Snapshot
  prototype object is the intrinsic object %Object.prototype%.
features: [AsyncContext]
---*/

var proto = Object.getPrototypeOf(AsyncContext.Snapshot.prototype);
assert.sameValue(proto, Object.prototype);
