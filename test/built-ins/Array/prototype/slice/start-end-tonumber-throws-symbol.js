// Copyright (C) 2026 Garham Lee. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-array.prototype.slice
description: >
    If _start_ or _end_ is a Symbol, Array.prototype.slice throws TypeError.
info: |
    Array.prototype.slice ( _start_, _end_ )
    
    3. Let _relativeStart_ be ? ToIntegerOrInfinity(_start_).
    7. If _end_ is *undefined*, let _relativeEnd_ be _len_; else let _relativeEnd_ be ? ToIntegerOrInfinity(_end_).

    ToIntegerOrInfinity (_argument_)

    1. Let _number_ be ? ToNumber(_argument_).

    ToNumber (_argument_)

    2. If _argument_ is either a Symbol or a BigInt, throw a *TypeError* exception.
features: [Symbol]
---*/
//Check #1
assert.throws(TypeError, function () {
    [0].slice(Symbol(), 0);
}, "If _start_ is a Symbol, Array.prototype.slice throws TypeError.")

//Check #2
assert.throws(TypeError, function () {
    [0].slice(0, Symbol());
}, "If _end_ is a Symbol, Array.prototype.slice throws TypeError.")
