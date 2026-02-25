// Copyright (C) 2026 Garham Lee. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-math.tanh
description: >
    If _x_ is a Symbol, ToNumber called by Math.tanh(_x_) throws a TypeError.
info: |
    Math.tanh ( _x_ )

    1. Let _n_ be ? ToNumber(_x_).
   
    ToNumber (_argument_)

    2. If _argument_ is either a Symbol or a BigInt, throw a *TypeError* exception.
features: [Symbol]
---*/
assert.throws(TypeError, function () {
    Math.tanh(Symbol());
}, "If _x_ is a Symbol, Math.tanh must return a abrupt completion.")
