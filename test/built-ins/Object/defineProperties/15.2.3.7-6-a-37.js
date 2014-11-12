// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
es5id: 15.2.3.7-6-a-37
description: >
    Object.defineProperties - 'desc' is accessor descriptor, test
    setting all attribute values of 'P' (8.12.9 step 4.b.i)
includes: [propertyHelper.js]
---*/

var obj = {};
var getFun = function () {
    return 10;
};
var setFun = function (value) {
    obj.setVerifyHelpProp = value;
};

Object.defineProperties(obj, {
    prop: {
        get: getFun,
        set: setFun,
        enumerable: false,
        configurable: false
    }
});
verifyEqualTo(obj, "prop", getFun());

verifyWritable(obj, "prop", "setVerifyHelpProp");

verifyNotEnumerable(obj, "prop");

verifyNotConfigurable(obj, "prop");

