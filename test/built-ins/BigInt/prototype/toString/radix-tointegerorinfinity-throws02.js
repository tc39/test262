// Copyright (C) 2026 Garham Lee. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-bigint.prototype.tostring
description: > 
    ToNumber called by BigInt.prototype.toString throws when ToPrimitive Throws
info: |
    BigInt.prototype.toString ( [ _radix_ ] )

    3. Else, let _radixMV_ be ? ToIntegerOrInfinity(_radix_).

    ToIntegerOrInfinity (_argument_)

    1. Let _number_ be ? ToNumber(_argument_).

    ToNumber (_argument_)

    7. Assert: _argument_ is an Object.
    8. Let _primValue_ be ? ToPrimitive(_argument_, ~number~).
---*/
assert.throws(TypeError, function() {
    BigInt.prototype.toString.call(10n, {valueOf: undefined, toString: undefined})
}, "TypeError is thrown when _radix_ cannot be converted to a primitive")
