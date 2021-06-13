// Copyright (C) 2020 Rick Waldron. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-asynciteratorprototype.find
description: >
  The value of the [[Prototype]] internal slot of AsyncIterator.prototype.find is the
  intrinsic object %FunctionPrototype%.
features: [iterator-helpers]
includes: [hidden-constructors.js]
---*/

assert.sameValue(
  Object.getPrototypeOf(AsyncIterator.prototype.find),
  AsyncFunction.prototype,
  'Object.getPrototypeOf(AsyncIterator.prototype.find) must return the value of AsyncFunction.prototype'
);
