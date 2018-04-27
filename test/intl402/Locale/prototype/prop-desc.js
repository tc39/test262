// Copyright 2018 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: pending
description: >
    Checks the "prototype" property of the Locale constructor.
info: |
    Intl.Locale.prototype

    The value of Intl.Locale.prototype is %LocalePrototype%.

    This property has the attributes { [[Writable]]: false, [[Enumerable]]: false, [[Configurable]]: false }.
features: [Intl.Locale]
---*/

const propdesc = Object.getOwnPropertyDescriptor(Intl.Locale, "prototype");
assert.sameValue(propdesc.writable, false);
assert.sameValue(propdesc.enumerable, false);
assert.sameValue(propdesc.configurable, false);
assert.sameValue(typeof propdesc.value, "object");
assert.notSameValue(propdesc.value, null);
