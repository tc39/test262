// Copyright 2015 Jordan Harband.  All rights reserved.
// See LICENSE for details.

/*---
es6id: 25.4.4.3_A1.2_T1
author: Jordan Harband
description: Promise.anySettled property descriptor
info: |
    ES6 Section 17

    Every other data property described in clauses 18 through 26 and in Annex
    B.2 has the attributes { [[Writable]]: true, [[Enumerable]]: false,
    [[Configurable]]: true } unless otherwise specified.
includes: [propertyHelper.js]
---*/

verifyNotEnumerable(Promise, 'anySettled');
verifyWritable(Promise, 'anySettled');
verifyConfigurable(Promise, 'anySettled');
