// Copyright (C) 2026 Garham Lee. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-math.f16round
description: >
    ToNumber called by Math.f16round throws when ToPrimitive Throws
info: |
    Math.f16round ( _x_ )

    1. Let _n_ be ? ToNumber(_x_).
   
    ToNumber (_argument_)

    8. Let _primValue_ be ? ToPrimitive(_argument_, ~number~).
---*/
assert.throws(TypeError, function () {
    Math.f16round({toString: undefined, valueOf: undefined});
}, "TypeError is thrown when _x_ cannot be converted to a primitive")
