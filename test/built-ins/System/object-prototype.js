// Copyright (C) 2016 Jordan Harband. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: system
description: >
  The value of the [[Prototype]] internal slot of the System object
  is the intrinsic object %ObjectPrototype% (19.1.3).
---*/

assert.sameValue(
  Object.getPrototypeOf(System),
  Object.prototype,
  '`Object.getPrototypeOf(System)` returns `Object.prototype`'
);
