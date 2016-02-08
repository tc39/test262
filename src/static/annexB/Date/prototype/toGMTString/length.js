// Copyright (C) 2015 André Bargull. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es6id: B.2.4.3
description: >
  Date.prototype.toGMTString.length is 0.
info: >
  Date.prototype.toGMTString ( )

  17 ECMAScript Standard Built-in Objects:
    Every built-in Function object, including constructors, has a length
    property whose value is an integer. Unless otherwise specified, this
    value is equal to the largest number of named arguments shown in the
    subclause headings for the function description, including optional
    parameters. However, rest parameters shown using the form “...name”
    are not included in the default argument count.

    Unless otherwise specified, the length property of a built-in Function
    object has the attributes { [[Writable]]: false, [[Enumerable]]: false,
    [[Configurable]]: true }.
includes: [propertyHelper.js]
---*/

assert.sameValue(Date.prototype.toGMTString.length, 0);

verifyNotEnumerable(Date.prototype.toGMTString, "length");
verifyNotWritable(Date.prototype.toGMTString, "length");
verifyConfigurable(Date.prototype.toGMTString, "length");
