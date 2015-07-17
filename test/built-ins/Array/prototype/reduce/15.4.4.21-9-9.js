// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.21-9-9
description: >
    Array.prototype.reduce - modifications to length don't change
    number of iterations in step 9
includes: [runTestCase.js]
---*/

function testcase() {
        var called = 0;
        function callbackfn(accum, val, idx, obj) {
            called++;
            return accum + val;
        }

        var arr = [0, 1, 2, 3];
        Object.defineProperty(arr, "0", {
            get: function () {
                arr.length = 2;
                return 0;
            },
            configurable: true
        });

        var newAccum = arr.reduce(callbackfn, "initialValue");

        return newAccum === "initialValue01" && called === 2;
    }
runTestCase(testcase);
