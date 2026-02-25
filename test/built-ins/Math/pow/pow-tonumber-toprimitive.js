// Copyright (C) 2026 Garham Lee. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-math.pow
description: >
    ToNumber called by Math.pow throws when ToPrimitive Throws
info: |
    Math.pow ( _base_, _exponent_ )

    1. Set _base_ to ? ToNumber(_base_).
    2. Set _exponent_ to ? ToNumber(_exponent_).
   
    ToNumber (_argument_)

    8. Let _primValue_ be ? ToPrimitive(_argument_, ~number~).
---*/
//Check #1
assert.throws(TypeError, function () {
    Math.pow(1, {toString: undefined, valueOf: undefined});
}, "TypeError is thrown when _exponent_ cannot be converted to a primitive")

//Check #2
assert.throws(TypeError, function () {
    Math.pow({toString: undefined, valueOf: undefined}, 1);
}, "TypeError is thrown when _base_ cannot be converted to a primitive")
