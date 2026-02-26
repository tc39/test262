// Copyright (C) 2026 Garham Lee. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-array.prototype.splice
description: >
    If _start_ or _deleteCount_ is a BigInt, Array.prototype.splice throws TypeError.
info: |
    Array.prototype.splice ( _start_, _deleteCount_, ..._items_ )

    3. Let _relativeStart_ be ? ToIntegerOrInfinity(_start_).
    10. Else,
        a. Let _dc_ be ? ToIntegerOrInfinity(_deleteCount_).

    ToIntegerOrInfinity (_argument_)

    1. Let _number_ be ? ToNumber(_argument_).

    ToNumber (_argument_)

    2. If _argument_ is either a Symbol or a BigInt, throw a *TypeError* exception.
features: [BigInt]
---*/
//Check #1
assert.throws(TypeError, function () {
    [].splice(0n, 0, 0);
}, "If _start_ is a BigInt, Array.prototype.splice throws TypeError.");

//Check #2
assert.throws(TypeError, function () {
    [].splice(0, 0n, 0);
}, "If _deleteCount_ is a BigInt, Array.prototype.splice throws TypeError.");
