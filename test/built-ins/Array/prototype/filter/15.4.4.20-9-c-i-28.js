// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.20-9-c-i-28
description: >
    Array.prototype.filter - element changed by getter on previous
    iterations is observed on an Array
includes: [runTestCase.js]
---*/

function testcase() {

        var preIterVisible = false;
        var arr = [];

        function callbackfn(val, idx, obj) {
            return idx === 1 && val === 9;
        }

        Object.defineProperty(arr, "0", {
            get: function () {
                preIterVisible = true;
                return 11;
            },
            configurable: true
        });

        Object.defineProperty(arr, "1", {
            get: function () {
                if (preIterVisible) {
                    return 9;
                } else {
                    return 11;
                }
            },
            configurable: true
        });
        var newArr = arr.filter(callbackfn);

        return newArr.length === 1 && newArr[0] === 9;
    }
runTestCase(testcase);
