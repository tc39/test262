// Copyright (C) 2024 Igalia, S. L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-properties-of-the-asynccontext-snapshot-constructor
description: >
  The prototype of AsyncContext.Snapshot is %Function.prototype%
info: |
  The value of the [[Prototype]] internal slot of the AsyncContext.Snapshot
  constructor is the intrinsic object %Function.prototype%.
features: [AsyncContext]
---*/

assert.sameValue(
  Object.getPrototypeOf(AsyncContext.Snapshot),
  Function.prototype,
  'Object.getPrototypeOf(AsyncContext.Snapshot) returns the value of `Function.prototype`'
);
