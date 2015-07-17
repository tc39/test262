// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.16-7-b-3
description: >
    Array.prototype.every - deleted properties in step 2 are visible
    here
includes: [runTestCase.js]
---*/

function testcase() {
        var accessed = false;
        function callbackfn(val, idx, obj) {
            accessed = true;
            return idx !== 2;
        }
        var arr = { 2: 6.99, 8: 19};

        Object.defineProperty(arr, "length", {
            get: function () {
                delete arr[2];
                return 10;
            },
            configurable: true
        });

        return Array.prototype.every.call(arr, callbackfn) && accessed;
    }
runTestCase(testcase);
