// Copyright (C) 2026 Garham Lee. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-array.prototype.reverse
description: >
    Array.prototype.reverse throws when length getter throws.
info: |
    Array.prototype.reverse ( )

    1. Let _O_ be ? ToObject(*this* value).
    2. Let _len_ be ? LengthOfArrayLike(_O_).

    LengthOfArrayLike (_obj_)

    1. Return ℝ(? ToLength(? Get(_obj_, *"length"*))).
---*/
assert.throws(Test262Error, function() {
    Array.prototype.reverse.call({get length() {throw new Test262Error}})
}, "Length getter should throw.");
