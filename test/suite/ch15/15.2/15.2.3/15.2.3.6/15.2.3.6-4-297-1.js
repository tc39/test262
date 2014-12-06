// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
es5id: 15.2.3.6-4-297-1
description: >
    Object.defineProperty - 'O' is an Arguments object of a function
    that has formal parameters, 'name' is own accessor property of 'O'
    which is also defined in [[ParameterMap]] of 'O', test TypeError
    is thrown when updating the [[Get]] attribute value of 'name'
    which is defined as non-configurable (10.6 [[DefineOwnProperty]]
    step 4 and step 5a)
includes: [propertyHelper.js]
---*/

(function (a, b, c) {
    function getFunc1() {
        return 10;
    }
    Object.defineProperty(arguments, "0", {
        get: getFunc1,
        enumerable: false,
        configurable: false
    });
    function getFunc2() {
        return 20;
    }
    try {
        Object.defineProperty(arguments, "0", {
            get: getFunc2
        });
        $ERROR("Expected an exception.");
    } catch (e) {
        if (a !== 0) {
            $ERROR('Expected a === 0, actually ' + a);
        }

        verifyEqualTo(arguments, "0", getFunc1());

        verifyNotEnumerable(arguments, "0");

        verifyNotConfigurable(arguments, "0");

        if (!(e instanceof TypeError)) {
            $ERROR("Expected TypeError, got " + e);
        }

    }
}(0, 1, 2));
