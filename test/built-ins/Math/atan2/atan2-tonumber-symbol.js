// Copyright (C) 2026 Garham Lee. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-math.atan2
description: >
    If _x_ or _y_ is a Symbol, ToNumber called by Math.atan2(_y_, _x_) throws a TypeError.
info: |
    Math.atan2 ( _y_, _x_ )

    1. Let _ny_ be ? ToNumber(_y_).
    2. Let _nx_ be ? ToNumber(_x_).
   
    ToNumber (_argument_)

    2. If _argument_ is either a Symbol or a BigInt, throw a *TypeError* exception.
features: [Symbol]
---*/
//Check #1
assert.throws(TypeError, function () {
    Math.atan2(Symbol(), 0);
}, "If _y_ is a Symbol, Math.atan2 must return a abrupt completion.");

//Check #2
assert.throws(TypeError, function () {
    Math.atan2(0, Symbol());
}, "If _x_ is a Symbol, Math.atan2 must return a abrupt completion.");
