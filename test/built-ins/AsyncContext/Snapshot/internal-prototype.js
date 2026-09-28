// Copyright (C) 2023 Igalia, S. L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-properties-of-the-asynccontext-snapshot-constructor
description: >
  The AsyncContext.Snapshot constructor has a [[Prototype]] internal slot whose
  value is %Function.prototype%.
features: [AsyncContext]
---*/

assert.sameValue(
  Function.prototype.isPrototypeOf(AsyncContext.Snapshot),
  true,
  'Function.prototype.isPrototypeOf(AsyncContext.Snapshot) returns true'
);
