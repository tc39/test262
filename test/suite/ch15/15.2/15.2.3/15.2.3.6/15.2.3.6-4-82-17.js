// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
es5id: 15.2.3.6-4-82-17
description: >
    Object.defineProperty - Update [[Enumerable]] and [[Configurable]]
    attributes of 'name' property to false successfully when
    [[Enumerable]] and [[Configurable]] attributes of 'name' property
    are true, the 'desc' is a generic descriptor which contains
    [[Enumerable]] and [[Configurable]] attributes as false, 'name'
    property is an index data property (8.12.9 step 8)
includes: [propertyHelper.js]
---*/


var obj = {};

Object.defineProperty(obj, "0", {
    value: 1001,
    writable: true,
    enumerable: true,
    configurable: true
});

Object.defineProperty(obj, "0", {
    enumerable: false,
    configurable: false
});

verifyEqualTo(obj, "0", 1001);

verifyWritable(obj, "0");

verifyNotEnumerable(obj, "0");

verifyNotConfigurable(obj, "0");
