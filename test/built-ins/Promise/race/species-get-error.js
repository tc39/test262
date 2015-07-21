// Copyright (C) 2015 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
description: >
    Error thrown when retrieving `Symbol.species` property of the `this` value
es6id: 25.4.4.3
info: >
    1. Let C be the this value.
    2. If Type(C) is not Object, throw a TypeError exception.
    3. Let S be Get(C, @@species).
    4. ReturnIfAbrupt(S).
features: [Symbol.species]
---*/

var C = {};
Object.defineProperty(C, Symbol.species, {
  get: function() {
    throw new Test262Error();
  }
});

assert.throws(Test262Error, function() {
  Promise.race.call(C);
});
