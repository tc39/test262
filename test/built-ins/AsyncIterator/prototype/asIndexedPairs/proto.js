// Copyright (C) 2020 Rick Waldron. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-asynciteratorprototype.asindexedpairs
description: >
  The value of the [[Prototype]] internal slot of AsyncIterator.prototype.asIndexedPairs is the
  intrinsic object %FunctionPrototype%.
features: [iterator-helpers]
---*/

assert.sameValue(
  Object.getPrototypeOf(AsyncIterator.prototype.asIndexedPairs),
  Function.prototype,
  'Object.getPrototypeOf(AsyncIterator.prototype.asIndexedPairs) must return the value of Function.prototype'
);
