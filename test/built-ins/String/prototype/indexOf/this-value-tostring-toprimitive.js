// Copyright (C) 2026 Garham Lee. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-string.prototype.indexof
description: >
    String.prototype.indexOf throws a TypeError when this value cannot be converted to a primitive
info: |
    String.prototype.indexOf ( _searchString_ [ , _position_ ] )

    1. Let _O_ be ? RequireObjectCoercible(*this* value).
    2. Let _S_ be ? ToString(_O_).

    ToString (_argument_)

    10. let _primValue_ be ? ToPrimitive(_argument_, ~string~).
---*/
assert.throws(TypeError, function () {
    String.prototype.indexOf.call({toString: undefined,valueOf: undefined}, "abc");
}, "String.prototype.indexOf should throw a TypeError in its ToPrimitive step")
