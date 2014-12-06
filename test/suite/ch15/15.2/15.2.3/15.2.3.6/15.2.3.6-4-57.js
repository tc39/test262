// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
es5id: 15.2.3.6-4-57
description: >
    Object.defineProperty - 'desc' is accessor descriptor, test
    updating all attribute values of 'name' (8.12.9 step 4.b.i)
includes: [propertyHelper.js]
---*/

var obj = {};
var setFunc = function (value) {
    obj.setVerifyHelpProp = value;
};
var getFunc = function () {
    return 14;
};

Object.defineProperty(obj, "property", {
    get: function () {
        return 11;
    },
    set: function (value) { },
    configurable: true,
    enumerable: true
});

Object.defineProperty(obj, "property", {
    get: getFunc,
    set: setFunc,
    configurable: false,
    enumerable: false
});

verifyEqualTo(obj, "property", getFunc());

verifyWritable(obj, "property", "setVerifyHelpProp");

verifyNotEnumerable(obj, "property");

verifyNotConfigurable(obj, "property");
