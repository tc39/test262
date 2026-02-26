// Copyright (C) 2026 Garham Lee. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-array.prototype.tospliced
description: >
    Array.prototype.toSpliced throws when _start_ or _skipCount_ cannot be converted to a primitive.
info: |
    Array.prototype.toSpliced ( _start_, _skipCount_, ..._items_ )

    3. Let _relativeStart_ be ? ToIntegerOrInfinity(_start_).
    10. Else,
        a. Let _sc_ be ? ToIntegerOrInfinity(_skipCount_).

    ToIntegerOrInfinity (_argument_)

    1. Let _number_ be ? ToNumber(_argument_).

    ToNumber (_argument_)

    8. Let _primValue_ be ? ToPrimitive(_argument_, ~number~).
---*/
//Check #1
assert.throws(TypeError, function () {
    [].toSpliced({toString: undefined, valueOf: undefined}, 0, 0);
}, "ToPrimitive(_start_) called by ToNumber(_start_) throws TypeError.");

//Check #2
assert.throws(TypeError, function () {
    [].toSpliced(0, {toString: undefined, valueOf: undefined}, 0);
}, "ToPrimitive(_skipCount_) called by ToNumber(_skipCount_) throws TypeError.");
