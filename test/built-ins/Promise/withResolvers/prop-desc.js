// Copyright (C) 2023 Peter Klecha. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-promise.withresolvers
features: [promise-with-resolvers]
author: Jordan Harband
description: Promise.withResolvers should be non-enumerable
info: |
    ES6 Section 17

    Every other data property described in clauses 18 through 26 and in Annex
    B.2 has the attributes { [[Writable]]: true, [[Enumerable]]: false,
    [[Configurable]]: true } unless otherwise specified.
includes: [propertyHelper.js]
---*/

verifyProperty(Promise, 'withResolvers', {
    enumerable: false,
    writable: true,
    configurable: true,
})
