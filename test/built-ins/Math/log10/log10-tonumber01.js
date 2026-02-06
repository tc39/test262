// Copyright (C) 2026 Garham Lee. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-math.log10
description: >
    If _x_ is a BigInt, ToNumber called by Math.log10(_x_) throws a TypeError.
info: |
    Math.log10 ( _x_ )

    1. Let _n_ be ? ToNumber(_x_).
   
    ToNumber (_argument_)

    2. If _argument_ is either a Symbol or a BigInt, throw a *TypeError* exception.
features: [BigInt]
---*/
assert.throws(TypeError, function () {
    Math.log10(0n);
}, "If _x_ is a BigInt, Math.log10 must return a abrupt completion.")
