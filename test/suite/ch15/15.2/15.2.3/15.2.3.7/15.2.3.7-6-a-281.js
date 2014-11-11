// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
es5id: 15.2.3.7-6-a-281
description: >
    Object.defineProperties - 'O' is an Arguments object, 'P' is own
    data property of 'O' which is also defined in [[ParameterMap]] of
    'O', and 'desc' is data descriptor, test updating multiple
    attribute values of 'P' (10.6 [[DefineOwnProperty]] step 3)
includes: [propertyHelper.js]
---*/


var arg;

(function fun(a, b, c) {
    arg = arguments;
}(0, 1, 2));

Object.defineProperties(arg, {
    "0": {
        value: 20,
        writable: false,
        enumerable: false,
        configurable: false
    }
});

verifyEqualTo(arg, "0", 20);

verifyNotWritable(arg, "0");

verifyNotEnumerable(arg, "0");

verifyNotConfigurable(arg, "0");
