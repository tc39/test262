// Copyright (C) 2026 Garham Lee. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-math.cos
description: >
    If _x_ is a Symbol, ToNumber called by Math.cos(_x_) throws a TypeError.
info: |
    Math.cos ( _x_ )

    1. Let _n_ be ? ToNumber(_x_).
   
    ToNumber (_argument_)

    2. If _argument_ is either a Symbol or a BigInt, throw a *TypeError* exception.
features: [Symbol]
---*/
assert.throws(TypeError, function () {
    Math.cos(Symbol());
}, "If _x_ is a Symbol, Math.cos must return a abrupt completion.")
