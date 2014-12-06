// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
es5id: 15.2.3.6-4-314
description: >
    Object.defineProperty - 'O' is an Arguments object, 'P' is generic
    property, and 'desc' is accessor descriptor, test 'P' is defined
    in 'O' with all correct attribute values (10.6
    [[DefineOwnProperty]] step 3)
includes: [propertyHelper.js]
---*/

(function () {
    function getFunc() {
        return "getFunctionString";
    }
    function setFunc(value) {
        this.testgetFunction = value;
    }
    Object.defineProperty(arguments, "genericProperty", {
        get: getFunc,
        set: setFunc,
        enumerable: true,
        configurable: true
    });
    verifyEqualTo(arguments, "genericProperty", getFunc());

    verifyWritable(arguments, "genericProperty", "testgetFunction");

    verifyEnumerable(arguments, "genericProperty");

    verifyConfigurable(arguments, "genericProperty");
}(1, 2, 3));
