// Copyright 2018 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: pending
description: >
    Checks the @@toStringTag property of the Locale prototype object.
info: |
    Intl.Locale.prototype[ @@toStringTag ]

    The initial value of the @@toStringTag property is the string value "Intl.Locale".

    This property has the attributes { [[Writable]]: false, [[Enumerable]]: false, [[Configurable]]: true }.
features: [Intl.Locale, Symbol.toStringTag]
---*/

const propdesc = Object.getOwnPropertyDescriptor(Intl.Locale.prototype, Symbol.toStringTag);
assert.sameValue(propdesc.writable, false);
assert.sameValue(propdesc.enumerable, false);
assert.sameValue(propdesc.configurable, true);
assert.sameValue(propdesc.value, "Intl.Locale");
