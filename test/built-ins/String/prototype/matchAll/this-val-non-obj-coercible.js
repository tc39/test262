// Copyright (C) 2018 Jordan Harband. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
description: The `this` value cannot be coerced into an object
info: |
    1. Let O be RequireObjectCoercible(this value).
    2. Let S be ToString(O).
    3. ReturnIfAbrupt(S).
features: [Symbol.iterator]
---*/

var matchAll = String.prototype.matchAll;

assert.sameValue(typeof matchAll, 'function');

assert.throws(TypeError, function() {
  matchAll.call(undefined);
}, 'undefined');

assert.throws(TypeError, function() {
  matchAll.call(null);
}, 'null');
