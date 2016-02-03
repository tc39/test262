// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
id: sec-%typedarray%.from
description: >
  %TypedArray%.from.length is 1.
info: >
  %TypedArray%.from ( source [ , mapfn [ , thisArg ] ] )

  17 ECMAScript Standard Built-in Objects:

  Every built-in Function object, including constructors, has a length property
  whose value is an integer. Unless otherwise specified, this value is equal to
  the largest number of named arguments shown in the subclause headings for the
  function description. Optional parameters (which are indicated with brackets:
  [ ]) or rest parameters (which are shown using the form «...name») are not
  included in the default argument count.

  Unless otherwise specified, the length property of a built-in Function object
  has the attributes { [[Writable]]: false, [[Enumerable]]: false,
  [[Configurable]]: true }.
includes: [propertyHelper.js, testTypedArray.js]
---*/

testWithTypedArrayConstructors(function(TA) {
  assert.sameValue(TA.from.length, 1);

  verifyNotEnumerable(TA.from, "length");
  verifyNotWritable(TA.from, "length");
  verifyConfigurable(TA.from, "length");
});
