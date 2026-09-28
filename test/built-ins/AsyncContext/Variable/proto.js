// Copyright (C) 2024 Igalia, S. L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-properties-of-the-asynccontext-variable-constructor
description: >
  The prototype of AsyncContext.Variable is %Function.prototype%
info: |
  The value of the [[Prototype]] internal slot of the AsyncContext.Variable
  constructor is the intrinsic object %Function.prototype%.
features: [AsyncContext]
---*/

assert.sameValue(
  Object.getPrototypeOf(AsyncContext.Variable),
  Function.prototype,
  'Object.getPrototypeOf(AsyncContext.Variable) returns the value of `Function.prototype`'
);
