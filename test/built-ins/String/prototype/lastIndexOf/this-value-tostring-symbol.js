// Copyright (C) 2026 Garham Lee. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-string.prototype.lastindexof
description: >
    If this value is a Symbol, String.prototype.lastindexOf must throw TypeError.
info: |
    String.prototype.lastindexOf ( _searchString_ [ , _position_ ] )

    1. Let _O_ be ? RequireObjectCoercible(*this* value).
    2. Let _S_ be ? ToString(_O_).

    ToString (_argument_)

    2. If _argument_ is a Symbol, throw a *TypeError* exception.
features: [Symbol]
---*/
assert.throws(TypeError, function () {
    String.prototype.lastindexOf.call(Symbol(), "abc");
}, "If this value is a Symbol, String.prototype.lastindexOf must throw TypeError.")
