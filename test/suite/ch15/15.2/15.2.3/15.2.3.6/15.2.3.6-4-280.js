// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
es5id: 15.2.3.6-4-280
description: >
    Object.defineProperty - 'O' is an Array, 'name' is generic own
    data property of 'O', and 'desc' is data descriptor, test updating
    multiple attribute values of 'name' (15.4.5.1 step 5)
includes: [propertyHelper.js]
---*/


var arrObj = [];

arrObj.property = 12; // default value of attributes: writable: true, configurable: true, enumerable: true

Object.defineProperty(arrObj, "property", {
    writable: false,
    enumerable: false,
    configurable: false
});

verifyEqualTo(arrObj, "property", 12);

verifyNotWritable(arrObj, "property");

verifyNotEnumerable(arrObj, "property");

verifyNotConfigurable(arrObj, "property");

