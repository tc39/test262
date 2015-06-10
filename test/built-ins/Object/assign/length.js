// Copyright (C) 2015 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
es6id: 19.1.2.1
description: '`length` property'
info: >
    The length property of the assign method is 2.

    ES6 Section 17:

    Unless otherwise specified, the length property of a built-in Function
    object has the attributes { [[Writable]]: false, [[Enumerable]]: false,
    [[Configurable]]: true }.
includes: [propertyHelper.js]
---*/

assert.sameValue(
  Object.assign.length, 2, 'The value of `Object.assign.length` is `2`'
);

verifyNotEnumerable(Object.assign, 'length');
verifyNotWritable(Object.assign, 'length');
verifyConfigurable(Object.assign, 'length');
