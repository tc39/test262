// Copyright (C) 2026 Garham Lee. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-math.atan2
description: >
    ToNumber called by Math.atan2 throws when ToPrimitive throws a TypeError.
info: |
    Math.atan2 ( _y_, _x_ )

    1. Let _ny_ be ? ToNumber(_y_).
    2. Let _nx_ be ? ToNumber(_x_).
   
    ToNumber (_argument_)

    8. Let _primValue_ be ? ToPrimitive(_argument_, ~number~).
---*/
//Check #1
assert.throws(TypeError, function () {
    Math.atan2({toString: undefined, valueOf: undefined}, 0)
}, "TypeError is thrown when _y_ cannot be converted to a primitive");

//Check #2
assert.throws(TypeError, function () {
    Math.atan2(0, {toString: undefined, valueOf: undefined})
}, "TypeError is thrown when _x_ cannot be converted to a primitive");
