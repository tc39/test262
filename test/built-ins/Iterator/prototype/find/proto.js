// Copyright (C) 2020 Rick Waldron. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-iteratorprototype.find
description: >
  The value of the [[Prototype]] internal slot of Iterator.prototype.find is the
  intrinsic object %FunctionPrototype%.
features: [iterator-helpers]
includes: [hidden-constructors.js]
---*/

assert.sameValue(
  Object.getPrototypeOf(Iterator.prototype.find),
  Function.prototype,
  'Object.getPrototypeOf(Iterator.prototype.find) must return the value of Function.prototype'
);
