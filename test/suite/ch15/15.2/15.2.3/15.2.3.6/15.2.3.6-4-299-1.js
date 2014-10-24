// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
es5id: 15.2.3.6-4-299-1
description: >
    Object.defineProperty - 'O' is an Arguments object of a function
    that has formal parameters, 'name' is own accessor property of 'O'
    which is also defined in [[ParameterMap]] of 'O', test TypeError
    is thrown when updating the [[Enumerable]] attribute value of
    'name' which is defined as non-configurable (10.6
    [[DefineOwnProperty]] steps 4 and 5a)
includes: [propertyHelper.js]
negative: TypeError
---*/

(function (a, b, c) {
    function getFunc() {
        return 10;
    }
    Object.defineProperty(arguments, "0", {
        get: getFunc,
        enumerable: true,
        configurable: false
    });
    try {
        Object.defineProperty(arguments, "0", {
            enumerable: false
        });
    } catch (e) {
        if (a !== 0) {
            $ERROR('Expected a === 0, actually ' + a);
        }
        accessorPropertyAttributesAreCorrect(arguments, "0", getFunc, undefined, undefined, true, false);
        throw e;
    }
}(0, 1, 2));
