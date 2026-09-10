// Copyright (C) 2026 Garham Lee. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-string.prototype.at
description: >
    String.prototype.at throws a TypeError when this value cannot be converted to a primitive
info: |
    String.prototype.at( index )

    1. Let _O_ be ? RequireObjectCoercible(*this* value).
    2. Let _S_ be ? ToString(_O_).

    ToString (_argument_)

    10. Let _primValue_ be ? ToPrimitive(_argument_, ~string~).
features: [String.prototype.at]
---*/
assert.throws(TypeError, () => {
    String.prototype.at.call({toString: undefined, valueOf: undefined});
}, "String.prototype.at should throw a TypeError in its ToPrimitive step");
