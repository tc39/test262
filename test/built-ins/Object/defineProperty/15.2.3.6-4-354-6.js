// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
es5id: 15.2.3.6-4-354-6
description: >
    Object.defineProperty - Indexed property 'P' with attributes
    [[Writable]]: false, [[Enumerable]]: true, [[Configurable]]: true
    is non-writable using simple assignment, 'A' is an Array object
includes: [runTestCase.js]
---*/

function testcase() {
        var obj = [];

        Object.defineProperty(obj, "0", {
            value: 2010,
            writable: false,
            enumerable: true,
            configurable: true
        });
        var verifyValue = (obj[0] === 2010);
        obj[0] = 1001;

        return verifyValue && obj[0] === 2010;
    }
runTestCase(testcase);
