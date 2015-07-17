// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.19-8-b-7
description: >
    Array.prototype.map - properties can be added to prototype after
    current position are visited on an Array
includes: [runTestCase.js]
---*/

function testcase() {
        function callbackfn(val, idx, obj) {
            if (idx === 1 && val === 6.99) {
                return false;
            } else {
                return true;
            }
        }
        var arr = [0, , 2];

        try {
            Object.defineProperty(arr, "0", {
                get: function () {
                    Object.defineProperty(Array.prototype, "1", {
                        get: function () {
                            return 6.99;
                        },
                        configurable: true
                    });
                    return 0;
                },
                configurable: true
            });

            var testResult = arr.map(callbackfn);
            return testResult[0] === true && testResult[1] === false;
        } finally {
            delete Array.prototype[1];
        }
    }
runTestCase(testcase);
