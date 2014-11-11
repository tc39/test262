// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
es5id: 15.2.3.6-4-82-8
description: >
    Object.defineProperty - Update [[Enumerable]] attribute of 'name'
    property to false successfully when [[Enumerable]] and
    [[Configurable]] attributes of 'name' property are true,  the
    'desc' is a generic descriptor which contains [Enumerable]]
    attribute as false and [[Configurable]] property is true, 'name'
    property is an accessor property (8.12.9 step 8)
includes: [propertyHelper.js]
---*/


var obj = {};
obj.verifySetFunction = "data";
var get_func = function () {
    return obj.verifySetFunction;
};
var set_func = function (value) {
    obj.verifySetFunction = value;
};
Object.defineProperty(obj, "foo", {
    get: get_func,
    set: set_func,
    enumerable: true,
    configurable: true
});

Object.defineProperty(obj, "foo", {
    enumerable: false,
    configurable: true
});

verifyEqualTo(obj, "foo", get_func());

verifyWritable(obj, "foo", "verifySetFunction");

verifyNotEnumerable(obj, "foo");

verifyConfigurable(obj, "foo");
