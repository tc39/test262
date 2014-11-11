// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
es5id: 15.2.3.7-6-a-304
description: >
    Object.defineProperties - 'O' is an Arguments object, 'P' is
    generic own accessor property of 'O', and 'desc' is accessor
    descriptor, test updating multiple attribute values of 'P' (10.6
    [[DefineOwnProperty]] step 4)
includes: [propertyHelper.js]
---*/

var arg = (function () {
    return arguments;
}(1, 2, 3));

Object.defineProperty(arg, "genericProperty", {
    get: function () {
        return 1001;
    },
    set: function (value) {
        arg.testGetFunction1 = value;
    },
    enumerable: true,
    configurable: true
});

function getFun() {
    return "getFunctionString";
}
function setFun(value) {
    arg.testGetFunction = value;
}
Object.defineProperties(arg, {
    "genericProperty": {
        get: getFun,
        set: setFun,
        enumerable: false,
        configurable: false
    }
});

verifyEqualTo(arg, "genericProperty", getFun());

verifyWritable(arg, "genericProperty", "testGetFunction");

verifyNotEnumerable(arg, "genericProperty");

verifyNotConfigurable(arg, "genericProperty");
