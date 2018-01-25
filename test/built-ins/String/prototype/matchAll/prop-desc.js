// Copyright (C) 2018 Jordan Harband. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
description: Property descriptor
info: |
    ES6 Section 17

    Every other data property described in clauses 18 through 26 and in Annex
    B.2 has the attributes { [[Writable]]: true, [[Enumerable]]: false,
    [[Configurable]]: true } unless otherwise specified.
features: [Symbol.iterator]
includes: [propertyHelper.js]
---*/

assert.sameValue(typeof String.prototype.matchAll, 'function');
verifyNotEnumerable(String.prototype, 'matchAll');
verifyWritable(String.prototype, 'matchAll');
verifyConfigurable(String.prototype, 'matchAll');
