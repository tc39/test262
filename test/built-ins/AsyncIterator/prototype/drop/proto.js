// Copyright (C) 2020 Rick Waldron. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-asynciteratorprototype.drop
description: >
  The value of the [[Prototype]] internal slot of AsyncIterator.prototype.drop is the
  intrinsic object %FunctionPrototype%.
features: [iterator-helpers]
---*/

assert.sameValue(
  Object.getPrototypeOf(AsyncIterator.prototype.drop),
  Function.prototype,
  'Object.getPrototypeOf(AsyncIterator.prototype.drop) must return the value of Function.prototype'
);
