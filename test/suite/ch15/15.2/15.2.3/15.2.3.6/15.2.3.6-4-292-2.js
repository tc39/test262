// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
es5id: 15.2.3.6-4-292-1
description: >
    Object.defineProperty - 'O' is an Arguments object of a function
    that has formal parameters, 'name' is own property of 'O' which is
    also defined in [[ParameterMap]] of 'O', and 'desc' is data
    descriptor, test updating multiple attribute values of 'name'
    (10.6 [[DefineOwnProperty]] step 3 and 5.b)
includes: [propertyHelper.js]
flags: [onlyStrict]
---*/

(function (a, b, c) {
    "use strict";

    Object.defineProperty(arguments, "0", {
        value: 20,
        writable: false,
        enumerable: false,
        configurable: false
    });

    if (a !== 0) {
        $ERROR('Expected a === 0, actually ' + a);
    }

    verifyEqualTo(arguments, "0", 20);

    verifyNotWritable(arguments, "0");

    verifyNotEnumerable(arguments, "0");

    verifyNotConfigurable(arguments, "0");
}(0, 1, 2));
