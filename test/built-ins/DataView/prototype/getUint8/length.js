// Copyright (C) 2015 André Bargull. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es6id: 24.2.4.10
description: >
  DataView.prototype.getUint8.length is 1.
info: >
  DataView.prototype.getUint8 ( byteOffset )

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

assert.sameValue(DataView.prototype.getUint8.length, 1);

verifyNotEnumerable(DataView.prototype.getUint8, "length");
verifyNotWritable(DataView.prototype.getUint8, "length");
verifyConfigurable(DataView.prototype.getUint8, "length");
