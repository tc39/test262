// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.19-8-9
description: >
    Array.prototype.map - modifications to length don't change number
    of iterations on an Array
includes: [runTestCase.js]
---*/

function testcase() {
        var called = 0;
        function callbackfn(val, idx, obj) {
            called += 1;
            return val > 10;
        }

        var arr = [9, , 12];

        Object.defineProperty(arr, "1", {
            get: function () {
                arr.length = 2;
                return 8;
            },
            configurable: true
        });

        var testResult = arr.map(callbackfn);

        return testResult.length === 3 && called === 2 && typeof testResult[2] === "undefined";
    }
runTestCase(testcase);
