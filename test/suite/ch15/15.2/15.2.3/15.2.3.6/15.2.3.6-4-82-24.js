// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
es5id: 15.2.3.6-4-82-24
description: >
    Object.defineProperty - Update [[Enumerable]] attributes of 'name'
    property to true successfully when [[Enumerable]] attribute of
    'name' is false and [[Configurable]] attribute of 'name' is true,
    the 'desc' is a generic descriptor which only contains
    [[Enumerable]] attribute as true, 'name' property is an index
    accessor property (8.12.9 step 8)
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
Object.defineProperty(obj, "0", {
    get: get_func,
    set: set_func,
    enumerable: false,
    configurable: true
});

Object.defineProperty(obj, "0", {
    enumerable: true
});

verifyEqualTo(obj, "0", get_func());

verifyWritable(obj, "0", "verifySetFunction");

verifyEnumerable(obj, "0");

verifyConfigurable(obj, "0");
