// Copyright (c) 2021 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-array.prototype.groupBy
description: Array.prototype.groupBy property name descriptor
info: |
  22.1.3.14 Array.prototype.groupBy ( callbackfn [ , thisArg ] )

  ...

    17 ECMAScript Standard Built-in Objects
  
  ...

includes: [propertyHelper.js]
---*/

assert.sameValue(
    Array.prototype.groupBy.name, 'groupBy',
    'The value of `Array.prototype.groupBy.name` is `"groupBy"`'
);
  
verifyProperty(Array.prototype.groupBy, "name", {
  enumerable: false,
  writable: false,
  configurable: true
});
