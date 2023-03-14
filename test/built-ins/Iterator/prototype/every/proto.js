// Copyright (C) 2020 Rick Waldron. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-iteratorprototype.every
description: >
  The value of the [[Prototype]] internal slot of Iterator.prototype.every is the
  intrinsic object %Function%.
includes: [hidden-constructors.js]
features: [iterator-helpers]
---*/

assert.sameValue(
  Object.getPrototypeOf(Iterator.prototype.every),
  Function.prototype,
  'Object.getPrototypeOf(Iterator.prototype.every) must return the value of Function.prototype'
);
