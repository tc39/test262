// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
es5id: 15.2.3.6-4-51
description: >
    Object.defineProperty - desc is data descriptor, test updating all
    attribute values of 'name' (8.12.9 step 4.a.i)
includes: [propertyHelper.js]
---*/

var obj = { "property": 1 }; // default value of attributes: writable: true, configurable: true, enumerable: true

Object.defineProperty(obj, "property", {
    value: 1001,
    writable: false,
    enumerable: false,
    configurable: false
});

verifyEqualTo(obj, "property", 1001);

verifyNotWritable(obj, "property");

verifyNotEnumerable(obj, "property");

verifyNotConfigurable(obj, "property");

