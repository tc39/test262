// Copyright (C) 2026 Garham Lee. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-number.prototype.tofixed
description: > 
    checking the case where this value is a negative number in Number.prototype.toFixed 
info: |
    Number.prototype.toFixed ( _fractionDigits_ )

    1. Let _x_ be ? ThisNumberValue(*this* value).

    9. If _x_ &lt; 0, then
        a. Set _s_ to *"-"*.
        b. Set _x_ to -_x_.
---*/
assert.sameValue(
    (-1.23).toFixed(1),
    "-1.2",
    "The value of (-1.23).toFixed(1) is expected to be -1.2"
);