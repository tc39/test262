// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
es5id: 15.2.3.6-4-228
description: >
    Object.defineProperty - 'O' is an Array, 'name' is an array index
    property, the [[Writable]] field of 'desc' and the [[Writable]]
    attribute value of 'name' are two booleans with same value
    (15.4.5.1 step 4.c)
includes: [propertyHelper.js]
---*/

var arrObj = [];

Object.defineProperty(arrObj, "0", { writable: false });

Object.defineProperty(arrObj, "0", { writable: false });
verifyEqualTo(arrObj, "0", undefined);

verifyNotWritable(arrObj, "0");

verifyNotEnumerable(arrObj, "0");

verifyNotConfigurable(arrObj, "0");

