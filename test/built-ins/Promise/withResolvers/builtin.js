// Copyright (C) 2023 Peter Klecha. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-promise.withresolvers
features: [promise-with-resolvers]
description: Promise.withResolvers meets the requirements for built-in objects
info: |
  Unless specified otherwise, a built-in object that is callable as a function
  is a built-in function object with the characteristics described in 10.3.
  Unless specified otherwise, the [[Extensible]] internal slot of a built-in
  object initially has the value *true*.

  Unless otherwise specified every built-in function and every built-in
  constructor has the Function prototype object, which is the initial value of
  the expression Function.prototype (20.2.3), as the value of its [[Prototype]]
  internal slot.

---*/

assert(Object.isExtensible(Promise.withResolvers), "Promise.withResolvers is extensible");

assert.sameValue(
  Object.getPrototypeOf(Promise.withResolvers),
  Function.prototype,
  "Prototype of Promise.withResolvers is Function.prototype"
);
