// Copyright (C) 2026 Garham Lee. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-array.prototype.splice
description: >
    Array.prototype.splice throws when _start_ or _deleteCount_ cannot be converted to a primitive.
info: |
    Array.prototype.splice ( _start_, _deleteCount_, ..._items_ )

    3. Let _relativeStart_ be ? ToIntegerOrInfinity(_start_).
    10. Else,
        a. Let _dc_ be ? ToIntegerOrInfinity(_deleteCount_).

    ToIntegerOrInfinity (_argument_)

    1. Let _number_ be ? ToNumber(_argument_).

    ToNumber (_argument_)

    8. Let _primValue_ be ? ToPrimitive(_argument_, ~number~).
---*/
//Check #1
assert.throws(TypeError, function () {
    [].splice({toString: undefined, valueOf: undefined}, 0, 0);
}, "ToPrimitive(_start_) called by ToNumber(_start_) throws TypeError.");

//Check #2
assert.throws(TypeError, function () {
    [].splice(0, {toString: undefined, valueOf: undefined}, 0);
}, "ToPrimitive(_deleteCount_) called by ToNumber(_deleteCount_) throws TypeError.");
