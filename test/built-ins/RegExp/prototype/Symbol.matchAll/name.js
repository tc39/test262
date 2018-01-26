// Copyright (C) 2018 Jordan Harband. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
description: RegExp.prototype[Symbol.matchAll] `name` property
info: |
    The value of the name property of this function is "[Symbol.matchAll]".

    ES6 Section 17:

    [...]

    Unless otherwise specified, the name property of a built-in Function
    object, if it exists, has the attributes { [[Writable]]: false,
    [[Enumerable]]: false, [[Configurable]]: true }.
includes: [propertyHelper.js]
features: [Symbol.matchAll]
---*/

assert.sameValue(RegExp.prototype[Symbol.matchAll].name, '[Symbol.matchAll]');

verifyNotEnumerable(RegExp.prototype[Symbol.matchAll], 'name');
verifyNotWritable(RegExp.prototype[Symbol.matchAll], 'name');
verifyConfigurable(RegExp.prototype[Symbol.matchAll], 'name');
