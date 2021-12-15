// Copyright (c) 2021 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-array.prototype.groupByToMap
description: Array.prototype.groupByToMap property name descriptor
info: |
  22.1.3.15 Array.prototype.groupByToMap ( callbackfn [ , thisArg ] )

  ...

    17 ECMAScript Standard Built-in Objects
  
  ...

includes: [propertyHelper.js]
---*/

assert.sameValue(
    Array.prototype.groupByToMap.name, 'groupByToMap',
    'The value of `Array.prototype.groupByMap.name` is `"groupByMap"`'
);
  
verifyProperty(Array.prototype.groupByToMap, "name", {
  enumerable: false,
  writable: false,
  configurable: true
});
