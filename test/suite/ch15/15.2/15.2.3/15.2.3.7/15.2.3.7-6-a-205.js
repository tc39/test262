// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
es5id: 15.2.3.7-6-a-205
description: >
    Object.defineProperties - 'O' is an Array, 'P' is an array index
    named property, 'desc' is accessor descriptor, test updating all
    attribute values of 'P'  (15.4.5.1 step 4.c)
includes: [propertyHelper.js]
---*/

var arr = [];

Object.defineProperties(arr, {
    "0": {
        get: function () {
            return 11;
        },
        set: function () { },
        configurable: true,
        enumerable: true
    }
});

var setFun = function (value) {
    arr.setVerifyHelpProp = value;
};
var getFun = function () {
    return 14;
};
Object.defineProperties(arr, {
    "0": {
        get: getFun,
        set: setFun,
        configurable: false,
        enumerable: false
    }
});

verifyEqualTo(arr, "0", getFun());

verifyWritable(arr, "0", "setVerifyHelpProp");

verifyNotEnumerable(arr, "0");

verifyNotConfigurable(arr, "0");
