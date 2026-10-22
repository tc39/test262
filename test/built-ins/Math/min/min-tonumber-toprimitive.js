// Copyright (C) 2026 Garham Lee. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-math.min
description: >
    ToNumber called by Math.min throws when ToPrimitive Throws
info: |
    Math.min ( ..._args_ )

    2. For each element _arg_ of _args_, do
        a. Let _n_ be ? ToNumber(_arg_).
   
    ToNumber (_argument_)

    8. Let _primValue_ be ? ToPrimitive(_argument_, ~number~).
---*/
assert.throws(TypeError, function () {
    Math.min(0, {toString: undefined, valueOf: undefined});
}, "TypeError is thrown when one of the _args_ cannot be converted to a primitive")
