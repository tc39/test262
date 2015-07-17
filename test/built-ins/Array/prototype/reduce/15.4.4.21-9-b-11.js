// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.21-9-b-11
description: >
    Array.prototype.reduce - deleting property of prototype in step 8
    causes deleted index property not to be visited on an Array
includes: [runTestCase.js]
---*/

function testcase() {

        var accessed = false;
        var testResult = true;

        function callbackfn(accum, val, idx, obj) {
            accessed = true;
            if (idx === 1) {
                testResult = false;
            }
        }

        var arr = [, , , 3];
        Object.defineProperty(arr, "0", {
            get: function () {
                delete Array.prototype[1];
                return 0;
            },
            configurable: true
        });

        try {
            Array.prototype[1] = 1;
            arr.reduce(callbackfn);
            return testResult && accessed;
        } finally {
            delete Array.prototype[1];
        }
    }
runTestCase(testcase);
