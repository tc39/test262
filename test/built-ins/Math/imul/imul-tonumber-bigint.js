// Copyright (C) 2026 Garham Lee. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-math.imul
description: >
    If either _x_ or _y_ is a BigInt, ToUint32 called by Math.imul(_x_, _y_) throws a TypeError.
info: |
    Math.imul ( _x_, _y_ )

    1. Let _a_ be ℝ(? ToUint32(_x_)).
    2. Let _b_ be ℝ(? ToUint32(_y_)).
   
    ToUint32 (_argument_)

    1. Let _number_ be ? ToNumber(_argument_).

    ToNumber (_argument_)

    2. If _argument_ is either a Symbol or a BigInt, throw a *TypeError* exception.
features: [BigInt]
---*/
//Check #1
assert.throws(TypeError, function () {
    Math.imul(0n, 0);
}, "If _x_ is a BigInt, Math.imul must return a abrupt completion.")

//Check #2
assert.throws(TypeError, function () {
    Math.imul(0, 0n);
}, "If _y_ is a BigInt, Math.imul must return a abrupt completion.")
