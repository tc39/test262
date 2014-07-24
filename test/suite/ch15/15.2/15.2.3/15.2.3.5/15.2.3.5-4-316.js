// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
es5id: 15.2.3.5-4-316
description: >
    Object.create - enumerable properties of 'Properties' are given
    numerical names (15.2.3.7 step 7)
includes: [runTestCase.js]
---*/

function testcase() {

        function getFunc() {
            return 20;
        }
        function setFunc() { }

        var newObj = Object.create({}, {
            0: {
                value: 100,
                enumerable: true,
                writable: true,
                configurable: true
            },
            1: {
                get: getFunc,
                set: setFunc,
                enumerable: true,
                configurable: true
            },
            2: {
                value: 200,
                enumerable: true,
                writable: true,
                configurable: true
            }
        });
        return newObj[0] === 100 && newObj[1] === 20 && newObj[2] === 200;
    }
runTestCase(testcase);
