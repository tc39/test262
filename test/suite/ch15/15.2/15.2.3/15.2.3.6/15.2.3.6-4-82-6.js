// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
es5id: 15.2.3.6-4-82-6
description: >
    Object.defineProperty - Update [[Enumerable]] attribute of 'name'
    property to true successfully when [[Enumerable]] attribute of
    'name' is false and [[Configurable]] attribute of 'name' is true,
    the 'desc' is a generic descriptor which only contains
    [[Enumerable]] attribute as true, 'name' property is a data
    property (8.12.9 step 8)
includes: [propertyHelper.js]
---*/


var obj = {};

Object.defineProperty(obj, "foo", {
    value: 1001,
    writable: true,
    enumerable: false,
    configurable: true
});

Object.defineProperty(obj, "foo", {
    enumerable: true
});

verifyEqualTo(obj, "foo", 1001);

verifyWritable(obj, "foo");

verifyEnumerable(obj, "foo");

verifyConfigurable(obj, "foo");
