// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
es5id: 15.2.3.7-6-a-289
description: >
    Object.defineProperties - 'O' is an Arguments object, 'P' is own
    accessor property of 'O' which is also defined in [[ParameterMap]]
    of 'O', test TypeError is thrown when updating the
    [[Configurable]] attribute value of 'P' which is defined as
    non-configurable (10.6 [[DefineOwnProperty]] step 4)
includes: [propertyHelper.js]
---*/


var arg;

(function fun(a, b, c) {
    arg = arguments;
}(0, 1, 2));

function get_func() {
    return 0;
}

Object.defineProperty(arg, "0", {
    get: get_func,
    enumerable: true,
    configurable: false
});

try {
    Object.defineProperties(arg, {
        "0": {
            configurable: true
        }
    });

    $ERROR("Expected an exception.");
} catch (e) {
    verifyEqualTo(arg, "0", get_func());

    verifyEnumerable(arg, "0");

    verifyNotConfigurable(arg, "0");

    if (!(e instanceof TypeError)) {
        $ERROR("Expected TypeError, got " + e);
    }

}
