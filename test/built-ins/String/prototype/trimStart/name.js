// Copyright (C) 2017 Valerie Young. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: pending
description: >
  String.prototype.trimStart.name is "trimStart".
info: >
  String.prototype.trimStart ( )

  17 ECMAScript Standard Built-in Objects:
    Every built-in Function object, including constructors, that is not
    identified as an anonymous function has a name property whose value
    is a String.

    Unless otherwise specified, the name property of a built-in Function
    object, if it exists, has the attributes { [[Writable]]: false,
    [[Enumerable]]: false, [[Configurable]]: true }.
includes: [propertyHelper.js]
---*/

assert.sameValue(String.prototype.trimStart.name, "valueOf");

verifyNotEnumerable(String.prototype.trimStart, "name");
verifyNotWritable(String.prototype.trimStart, "name");
verifyConfigurable(String.prototype.trimStart, "name");
