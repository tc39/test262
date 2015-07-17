// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.21-8-b-iii-1-4
description: >
    Array.prototype.reduce - element to be retrieved is own data
    property that overrides an inherited data property on an Array
includes: [runTestCase.js]
---*/

function testcase() {

        var testResult = false;
        function callbackfn(prevVal, curVal, idx, obj) {
            if (idx === 1) {
                testResult = (prevVal === 0);
            }
        }

        try {
            Array.prototype[0] = "9";
            [0, 1, 2].reduce(callbackfn);
            return testResult;

        } finally {
            delete Array.prototype[0];
        }
    }
runTestCase(testcase);
