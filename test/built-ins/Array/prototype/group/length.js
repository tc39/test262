
// Copyright (c) 2021 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-array.prototype.group
description: Array.prototype.group property length descriptor
info: |
  22.1.3.14 Array.prototype.group ( callbackfn [ , thisArg ] )

  ...

    17 ECMAScript Standard Built-in Objects

  ...

includes: [propertyHelper.js]
features: [Array.prototype.group]
---*/

verifyProperty(Array.prototype.group, "length", {
  value: 1,
  enumerable: false,
  writable: false,
  configurable: true
});
