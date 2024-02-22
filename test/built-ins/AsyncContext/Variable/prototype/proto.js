// Copyright (C) 2024 Igalia, S. L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-properties-of-the-asynccontext-variable-prototype-object
description: |
  The prototype of AsyncContext.Variable.prototype is Object.prototype.
info: |
  The value of the [[Prototype]] internal slot of the AsyncContext.Variable
  prototype object is the intrinsic object %Object.prototype%.
features: [AsyncContext]
---*/

var proto = Object.getPrototypeOf(AsyncContext.Variable.prototype);
assert.sameValue(proto, Object.prototype);
