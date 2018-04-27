// Copyright 2018 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: pending
description: >
    Verifies the properties of a Locale instance.
info: |
    Intl.Locale( tag [, options] )
    6. Let locale be ? OrdinaryCreateFromConstructor(NewTarget, %LocalePrototype%, internalSlotsList).
features: [Intl.Locale]
---*/

const value = new Intl.Locale("en");
assert.sameValue(Object.getPrototypeOf(value), Intl.Locale.prototype);
assert.sameValue(Object.isExtensible(value), true);
