// Copyright (C) 2015 André Bargull. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es6id: 21.1.3.23
description: >
  String.prototype.toString.name is "toString".
info: |
  String.prototype.toString ( )

  17 ECMAScript Standard Built-in Objects:
    Every built-in Function object, including constructors, that is not
    identified as an anonymous function has a name property whose value
    is a String.

    Unless otherwise specified, the name property of a built-in Function
    object, if it exists, has the attributes { [[Writable]]: false,
    [[Enumerable]]: false, [[Configurable]]: true }.
includes: [propertyHelper.js]
---*/

assert.sameValue(String.prototype.toString.name, "toString");

verifyNotEnumerable(String.prototype.toString, "name");
verifyNotWritable(String.prototype.toString, "name");
verifyConfigurable(String.prototype.toString, "name");
