// Copyright (C) 2026 Garham Lee. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-math.imul
description: >
    ToUint32 called by Math.imul throws when ToPrimitive throws a TypeError.
info: |
    Math.imul ( _x_, _y_ )

    1. Let _a_ be ℝ(? ToUint32(_x_)).
    2. Let _b_ be ℝ(? ToUint32(_y_)).

    ToUint32 (_argument_)

    1. Let _number_ be ? ToNumber(_argument_).

    ToNumber (_argument_)

    8. Let _primValue_ be ? ToPrimitive(_argument_, ~number~).
---*/
//Check #1
assert.throws(TypeError, function () {
    Math.imul({toString: undefined, valueOf: undefined}, 0)
}, "TypeError is thrown when _x_ cannot be converted to a primitive");

//Check #2
assert.throws(TypeError, function () {
    Math.imul(0, {toString: undefined, valueOf: undefined})
}, "TypeError is thrown when _y_ cannot be converted to a primitive");
