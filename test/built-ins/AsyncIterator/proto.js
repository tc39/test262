// Copyright (C) 2020 Rick Waldron. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-properties-of-the-asynciterator-constructor
description: >
  The value of the [[Prototype]] internal slot of the AsyncIterator constructor is the
  intrinsic object %FunctionPrototype%.
features: [iterator-helpers]
---*/

assert.sameValue(
  Object.getPrototypeOf(AsyncIterator),
  Function.prototype,
  'Object.getPrototypeOf(AsyncIterator) must return the value of Function.prototype'
);
