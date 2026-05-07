// Copyright (C) 2026 Jordan Harband. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-set-error.prototype.stack
description: >
  set Error.prototype.stack.length is 1.
info: |
  set Error.prototype.stack

  17 ECMAScript Standard Built-in Objects:
    Every built-in function object, including constructors, has a length
    property whose value is an integer. Unless otherwise specified, this
    value is equal to the largest number of named arguments shown in the
    subclause headings for the function description.

    Unless otherwise specified, the length property of a built-in function
    object has the attributes { [[Writable]]: false, [[Enumerable]]: false,
    [[Configurable]]: true }.
includes: [propertyHelper.js]
features: [error-stack-accessor]
---*/

var set = Object.getOwnPropertyDescriptor(Error.prototype, 'stack').set;

verifyProperty(set, 'length', {
  value: 1,
  writable: false,
  enumerable: false,
  configurable: true,
});
