// Copyright (C) 2026 Garham Lee. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-array.prototype.slice
description: >
    ToNumber called by Array.prototype.slice throws when ToPrimitive throws.
info: |
    Array.prototype.slice ( _start_, _end_ )
    
    3. Let _relativeStart_ be ? ToIntegerOrInfinity(_start_).
    7. If _end_ is *undefined*, let _relativeEnd_ be _len_; else let _relativeEnd_ be ? ToIntegerOrInfinity(_end_).

    ToIntegerOrInfinity (_argument_)

    1. Let _number_ be ? ToNumber(_argument_).

    ToNumber (_argument_)

    8. Let _primValue_ be ? ToPrimitive(_argument_, ~number~).
---*/
//Check #1
assert.throws(TypeError, function () {
    [0].slice({toString: undefined, valueOf: undefined}, 0);
}, "TypeError is thrown when _start_ cannot be converted to a primitive.")

//Check #2
assert.throws(TypeError, function () {
    [0].slice(0, {toString: undefined, valueOf: undefined});
}, "TypeError is thrown when _end_ cannot be converted to a primitive.")
