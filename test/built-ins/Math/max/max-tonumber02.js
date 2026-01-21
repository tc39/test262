// Copyright (C) 2026 Garham Lee. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-math.max
description: >
    If one of the _args_ is a Symbol, ToNumber called by Math.max ( ..._args_ ) throws a TypeError.
info: |
    Math.max ( ..._args_ )

    2. For each element _arg_ of _args_, do
        a. Let _n_ be ? ToNumber(_arg_).
   
    ToNumber (_argument_)

    2. If _argument_ is either a Symbol or a BigInt, throw a *TypeError* exception.
features: [Symbol]
---*/
assert.throws(TypeError, function () {
    Math.max(0, Symbol());
}, "If one of the _args_ is a Symbol, Math.max must return a abrupt completion.")
