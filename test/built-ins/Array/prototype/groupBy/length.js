
// Copyright (c) 2021 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-array.prototype.groupBy
description: Array.prototype.groupBy property length descriptor
info: |
  22.1.3.14 Array.prototype.groupBy ( callbackfn [ , thisArg ] )

  ...

    17 ECMAScript Standard Built-in Objects
  
  ...

includes: [propertyHelper.js]
---*/

assert.sameValue(
  Array.prototype.groupBy.length, 1,
  'The value of `Array.prototype.groupBy.length` is `1`'
);
  
verifyProperty(Array.prototype.groupBy, "length", {
  enumerable: false,
  writable: false,
  configurable: true
});
