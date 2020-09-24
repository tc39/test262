// Copyright (C) 2020 Rick Waldron. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-asynciteratorprototype.every
description: >
  The value of the [[Prototype]] internal slot of AsyncIterator.prototype.every is the
  intrinsic object %AsyncFunction%.
features: [iterator-helpers]
---*/

const AsyncFunction = (async function() {}).constructor;

assert.sameValue(
  Object.getPrototypeOf(AsyncIterator.prototype.every),
  AsyncFunction.prototype,
  'Object.getPrototypeOf(AsyncIterator.prototype.every) must return the value of AsyncFunction.prototype'
);
