// Copyright (C) 2017 Valerie Young. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-string.prototype.trimRight
description: >
  String.prototype.trimRight.name is "trimRight".
info: >
  String.prototype.trimRight ( )

  17 ECMAScript Standard Built-in Objects:
    Every built-in Function object, including constructors, that is not
    identified as an anonymous function has a name property whose value
    is a String.

    Unless otherwise specified, the name property of a built-in Function
    object, if it exists, has the attributes { [[Writable]]: false,
    [[Enumerable]]: false, [[Configurable]]: true }.
includes: [propertyHelper.js]
features: [string-trimming]
---*/

verifyProperty(String.prototype.trimRight, "name", {
  value: "trimRight",
  enumerable: false,
  writable: false,
  configurable: true,
});
