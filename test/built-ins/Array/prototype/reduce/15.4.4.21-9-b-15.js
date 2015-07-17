// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.21-9-b-15
description: >
    Array.prototype.reduce - decreasing length of array with prototype
    property in step 8 causes prototype index property to be visited
includes: [runTestCase.js]
---*/

function testcase() {

        var testResult = false;

        function callbackfn(accum, val, idx, obj) {
            if (idx === 2 && val === "prototype") {
                testResult = true;
            }
        }
        var arr = [0, 1, 2, 3];

        try {
            Object.defineProperty(Array.prototype, "2", {
                get: function () {
                    return "prototype";
                },
                configurable: true
            });

            Object.defineProperty(arr, "0", {
                get: function () {
                    arr.length = 2;
                    return 1;
                },
                configurable: true
            });

            arr.reduce(callbackfn);

            return testResult;
        } finally {
            delete Array.prototype[2];
        }
    }
runTestCase(testcase);
