// Copyright (C) 2026 Garham Lee. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-string.prototype.at
description: >
    If this value is a Symbol, String.prototype.at throws TypeError
info: |
    String.prototype.at( index )

    1. Let _O_ be ? RequireObjectCoercible(*this* value).
    2. Let _S_ be ? ToString(_O_).

    ToString (_argument_)

    2. If _argument_ is a Symbol, throw a *TypeError* exception.
features: [String.prototype.at, Symbol]
---*/
assert.throws(TypeError, () => {
    String.prototype.at.call(Symbol());
}, "If this value is a Symbol, String.prototype.at throws TypeError");
