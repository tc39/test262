// Copyright (C) 2023 Igalia, S. L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-properties-of-the-asynccontext-variable-constructor
description: >
  The AsyncContext.Variable constructor has a [[Prototype]] internal slot whose
  value is %Function.prototype%.
features: [AsyncContext]
---*/

assert.sameValue(
  Function.prototype.isPrototypeOf(AsyncContext.Variable),
  true,
  'Function.prototype.isPrototypeOf(AsyncContext.Variable) returns true'
);
