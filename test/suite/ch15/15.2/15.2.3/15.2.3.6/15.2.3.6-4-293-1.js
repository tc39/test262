// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
es5id: 15.2.3.6-4-293-1
description: >
    Object.defineProperty - 'O' is an Arguments object, 'name' is own
    data property of 'O', test TypeError is not thrown when updating
    the [[Value]] attribute value of 'name' which is defined as
    non-writable and configurable (10.6 [[DefineOwnProperty]] step 3
    and 5b)
includes: [propertyHelper.js]
---*/

(function () {
    Object.defineProperty(arguments, "0", {
        value: 10,
        writable: false
    });
    Object.defineProperty(arguments, "0", {
        value: 20
    });
    verifyEqualTo(arguments, "0", 20);

    verifyNotWritable(arguments, "0");

    verifyEnumerable(arguments, "0");

    verifyConfigurable(arguments, "0");
}(0, 1, 2));

