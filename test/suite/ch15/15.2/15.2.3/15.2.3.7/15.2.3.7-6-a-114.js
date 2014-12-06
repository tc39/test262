// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
es5id: 15.2.3.7-6-a-114
description: >
    Object.defineProperties - 'O' is an Array, 'P' is the length
    property of 'O', the [[Value]] field of 'desc' is absent, test
    every field in 'desc' is absent (15.4.5.1 step 3.a.i)
includes: [propertyHelper.js]
---*/

var arr = [];

Object.defineProperties(arr, { length: {} });

if (arr.length !== 0) {
    $ERROR("Expected arr.length to be 0, actually " + arr.length);
}

arr.length = 2;

verifyEqualTo(arr, "length", 2);

verifyWritable(arr, "length", "length", 5);

verifyNotEnumerable(arr, "length");

verifyNotConfigurable(arr, "length");
