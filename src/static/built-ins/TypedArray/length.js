// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
es6id: 22.2.2
description: >
  TypedArray has a "length" property whose value is 3.
info: >
  22.2.2 Properties of the %TypedArray% Intrinsic Object

  Besides a length property whose value is 3 and a name property whose value is
  "TypedArray", %TypedArray% has the following properties:
  ...

  ES6 section 17: Unless otherwise specified, the length property of a built-in
  Function object has the attributes { [[Writable]]: false, [[Enumerable]]:
  false, [[Configurable]]: true }.
includes: [propertyHelper.js, testTypedArray.js]
---*/

assert.sameValue(TypedArray.length, 3);

verifyNotEnumerable(TypedArray, 'length');
verifyNotWritable(TypedArray, 'length');
verifyConfigurable(TypedArray, 'length');
