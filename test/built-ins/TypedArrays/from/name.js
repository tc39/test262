// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es6id: 22.2.2.1
description: >
  %TypedArray%.from.name is "from".
info: >
  %TypedArray%.from ( source [ , mapfn [ , thisArg ] ] )

  17 ECMAScript Standard Built-in Objects:
    Every built-in Function object, including constructors, that is not
    identified as an anonymous function has a name property whose value
    is a String.

    Unless otherwise specified, the name property of a built-in Function
    object, if it exists, has the attributes { [[Writable]]: false,
    [[Enumerable]]: false, [[Configurable]]: true }.
includes: [propertyHelper.js, testTypedArray.js]
---*/

testWithTypedArrayConstructors(function(TA) {
  assert.sameValue(TA.from.name, "from");

  verifyNotEnumerable(TA.from, "name");
  verifyNotWritable(TA.from, "name");
  verifyConfigurable(TA.from, "name");
});
