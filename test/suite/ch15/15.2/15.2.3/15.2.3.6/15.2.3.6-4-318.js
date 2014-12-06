// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
es5id: 15.2.3.6-4-318
description: >
    Object.defineProperty - 'O' is an Arguments object, 'name' is
    generic own data property of 'O', test TypeError is thrown when
    updating the [[Writable]] attribute value of 'name' which is not
    configurable (10.6 [[DefineOwnProperty]] step 4)
includes: [propertyHelper.js]
---*/

(function () {
    Object.defineProperty(arguments, "genericProperty", {
        writable: false,
        configurable: false
    });
    try {
        Object.defineProperty(arguments, "genericProperty", {
            writable: true
        });
        $ERROR("Expected an exception.");
    } catch (e) {
        verifyEqualTo(arguments, "genericProperty", undefined);

        verifyNotWritable(arguments, "genericProperty");

        verifyNotEnumerable(arguments, "genericProperty");

        verifyNotConfigurable(arguments, "genericProperty");


        if (!(e instanceof TypeError)) {
            $ERROR("Expected TypeError, got " + e);
        }

    }

}(1, 2, 3));
