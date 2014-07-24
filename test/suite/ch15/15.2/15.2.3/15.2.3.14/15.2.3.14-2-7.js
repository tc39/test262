// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
es5id: 15.2.3.14-2-7
description: >
    Object.keys - 'n' is 0 when 'O' doesn't contain own enumerable
    data or accessor properties
includes: [runTestCase.js]
---*/

function testcase() {
        var obj = {};

        Object.defineProperty(obj, "prop1", {
            value: 1001,
            enumerable: false,
            configurable: true
        });

        Object.defineProperty(obj, "prop2", {
            get: function () {
                return 1002;
            },
            enumerable: false,
            configurable: true
        });

        var arr = Object.keys(obj);

        return arr.length === 0;
    }
runTestCase(testcase);
