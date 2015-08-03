// Copyright (c) 2014 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/*---
es6id: 22.1.2.1
description: >
    The length property of the Array.from method is 1.

info: >

    ES6 Section 17:

    Unless otherwise specified, the length property of a built-in Function
    object has the attributes { [[Writable]]: false, [[Enumerable]]: false,
    [[Configurable]]: true }.
includes: [propertyHelper.js]
---*/

assert.sameValue(Array.from.length, 1);

verifyNotEnumerable(Array.from, 'length');
verifyNotWritable(Array.from, 'length');
verifyConfigurable(Array.from, 'length');
