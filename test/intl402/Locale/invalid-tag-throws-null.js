// Copyright 2018 André Bargull; Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: pending
description: >
    Verifies the type check on the tag argument to Intl.Locale.
info: |
    Intl.Locale( tag [, options] )
    7. If Type(tag) is not String or Object, throw a TypeError exception.
features: [Intl.Locale]
---*/

assert.throws(TypeError, () => new Intl.Locale(null));
