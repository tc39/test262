// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
es5id: 15.2.3.7-6-a-305
description: >
    Object.defineProperties - 'O' is an Arguments object, 'P' is
    generic own data property of 'O', and 'desc' is data descriptor,
    test updating multiple attribute values of 'P' (10.6
    [[DefineOwnProperty]] step 4)
includes: [propertyHelper.js]
---*/

var arg = (function () {
    return arguments;
}(1, 2, 3));

Object.defineProperty(arg, "genericProperty", {
    value: 1001,
    writable: true,
    enumerable: true,
    configurable: true
});

Object.defineProperties(arg, {
    "genericProperty": {
        value: 1002,
        enumerable: false,
        configurable: false
    }
});

verifyEqualTo(arg, "genericProperty", 1002);

verifyWritable(arg, "genericProperty");

verifyNotEnumerable(arg, "genericProperty");

verifyNotConfigurable(arg, "genericProperty");
