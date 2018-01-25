// Copyright (C) 2018 Jordan Harband. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
description: Length of String.prototype.matchAll
info: |
    ES6 Section 17:
    Every built-in Function object, including constructors, has a length
    property whose value is an integer. Unless otherwise specified, this value
    is equal to the largest number of named arguments shown in the subclause
    headings for the function description, including optional parameters.

    [...]

    Unless otherwise specified, the length property of a built-in Function
    object has the attributes { [[Writable]]: false, [[Enumerable]]: false,
    [[Configurable]]: true }.
includes: [propertyHelper.js]
---*/

assert.sameValue(String.prototype.matchAll.length, 1);

verifyNotEnumerable(String.prototype.matchAll, 'length');
verifyNotWritable(String.prototype.matchAll, 'length');
verifyConfigurable(String.prototype.matchAll, 'length');
