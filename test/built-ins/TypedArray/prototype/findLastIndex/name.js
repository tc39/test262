// Copyright (C) 2015 André Bargull. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-%typedarray%.prototype.findlastindex
description: >
  %TypedArray%.prototype.findLastIndex.name is "findLastIndex".
info: |
  %TypedArray%.prototype.findLastIndex (predicate [ , thisArg ] )

  17 ECMAScript Standard Built-in Objects:
    Every built-in Function object, including constructors, that is not
    identified as an anonymous function has a name property whose value
    is a String.

    Unless otherwise specified, the name property of a built-in Function
    object, if it exists, has the attributes { [[Writable]]: false,
    [[Enumerable]]: false, [[Configurable]]: true }.
includes: [propertyHelper.js, testTypedArray.js]
features: [TypedArray]
---*/

assert.sameValue(TypedArray.prototype.findLastIndex.name, "findLastIndex");

verifyNotEnumerable(TypedArray.prototype.findLastIndex, "name");
verifyNotWritable(TypedArray.prototype.findLastIndex, "name");
verifyConfigurable(TypedArray.prototype.findLastIndex, "name");
