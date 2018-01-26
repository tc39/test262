// Copyright (C) 2015 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
description: >
    Behavior when error is thrown during retrieval of `Symbol.species` property
info: |
    3. Let C be ? SpeciesConstructor(R, %RegExp%).
features: [Symbol.match, Symbol.matchAll, Symbol.species]
---*/

var obj = {};
Object.defineProperty(obj, Symbol.species, {
  get: function () {
    throw new Test262Error();
  }
});
obj[Symbol.match] = true;

assert.throws(Test262Error, function() {
  RegExp.prototype[Symbol.matchAll].call(obj);
});
