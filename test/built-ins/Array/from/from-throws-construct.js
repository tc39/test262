// Copyright (C) 2026 Garham Lee. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-array.from
description: >
    Array.from throws in construct operation.
info: |
    Array.from ( _items_ [ , _mapper_ [ , _thisArg_ ] ] )

    1. Let _C_ be the *this* value.
    
    7. Let _arrayLike_ be ! ToObject(_items_).
    8. Let _len_ be ? LengthOfArrayLike(_arrayLike_).
    9. If IsConstructor(_C_) is *true*, then
        a. Let _A_ be ? Construct(_C_, « 𝔽(_len_) »).
---*/
assert.throws(Test262Error, function () {
    Array.from.call(function() {throw new Test262Error}, 0);
}, "Array.from throws")
