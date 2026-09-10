// Copyright (C) 2026 Garham Lee. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-array.prototype.with
description: >
    Array.prototype.with should throw when length getter throws.
info: |
    Array.prototype.with ( _index_, _value_ )

    1. Let _O_ be ? ToObject(*this* value).
    2. Let _len_ be ? LengthOfArrayLike(_O_).

    LengthOfArrayLike (_obj_)

    1. Return ℝ(? ToLength(? Get(_obj_, *"length"*))).
---*/
assert.throws(Test262Error, function () {
    Array.prototype.with.call({get length() {throw new Test262Error}})
}, "Length getter should throw.")
