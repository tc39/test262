// Copyright (C) 2026 Garham Lee. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-math.pow
description: >
    If either base or exponent is a Symbol, ToNumber called by Math.pow ( _base_, _exponent_ ) throws a TypeError.
info: |
    Math.pow ( _base_, _exponent_ )

    1. Set _base_ to ? ToNumber(_base_).
    2. Set _exponent_ to ? ToNumber(_exponent_).
   
    ToNumber (_argument_)

    2. If _argument_ is either a Symbol or a BigInt, throw a *TypeError* exception.
features: [Symbol]
---*/
//Check #1
assert.throws(TypeError, function () {
    Math.pow(1, Symbol());
}, "If _exponent_ is a Symbol, Math.pow must return a abrupt completion.")

//Check #2
assert.throws(TypeError, function () {
    Math.pow(Symbol(), 1);
}, "If _base_ is a Symbol, Math.pow must return a abrupt completion.")
