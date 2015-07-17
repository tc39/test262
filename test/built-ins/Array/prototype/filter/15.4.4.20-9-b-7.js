// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.20-9-b-7
description: >
    Array.prototype.filter - properties can be added to prototype
    after current position are visited on an Array
includes: [runTestCase.js]
---*/

function testcase() {
        function callbackfn(val, idx, obj) {
            return true;
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

            var newArr = arr.filter(callbackfn);

            return newArr.length === 3 && newArr[1] === 6.99;
        } finally {
            delete Array.prototype[1];
        }
    }
runTestCase(testcase);
