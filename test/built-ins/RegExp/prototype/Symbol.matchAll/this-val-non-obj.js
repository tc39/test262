// Copyright (C) 2018 Jordan Harband. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
description: The `this` value must be an object
info: |
    1. Let R be the this value.
    2. Return ? MatchAllIterator(R, string).
    [...]
    1. If ? IsRegExp(R) is not true, throw a TypeError exception.
features: [Symbol.matchAll]
---*/

assert.throws(TypeError, function() {
  RegExp.prototype[Symbol.matchAll].call(undefined);
});

assert.throws(TypeError, function() {
  RegExp.prototype[Symbol.matchAll].call(null);
});

assert.throws(TypeError, function() {
  RegExp.prototype[Symbol.matchAll].call(true);
});

assert.throws(TypeError, function() {
  RegExp.prototype[Symbol.matchAll].call('string');
});

assert.throws(TypeError, function() {
  RegExp.prototype[Symbol.matchAll].call(Symbol.matchAll);
});

assert.throws(TypeError, function() {
  RegExp.prototype[Symbol.matchAll].call(86);
});
