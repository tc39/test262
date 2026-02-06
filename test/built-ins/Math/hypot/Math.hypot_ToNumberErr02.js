// Copyright (C) 2026 Garham Lee. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-math.hypot
description: >
    If one of the _args_ is a BigInt, ToNumber called by Math.hypot ( ..._args_ ) throws a TypeError.
info: |
    Math.hypot ( ..._args_ )

    2. For each element _arg_ of _args_, do
        a. Let _n_ be ? ToNumber(_arg_).
   
    ToNumber (_argument_)

    2. If _argument_ is either a Symbol or a BigInt, throw a *TypeError* exception.
features: [BigInt]
---*/
assert.throws(TypeError, function () {
    Math.hypot(0, 0n);
}, "If one of the _args_ is a BigInt, Math.hypot must return a abrupt completion.")
