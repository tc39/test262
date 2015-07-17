// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.19-8-b-11
description: >
    Array.prototype.map - deleting property of prototype causes
    prototype index property not to be visited on an Array
includes: [runTestCase.js]
---*/

function testcase() {
        function callbackfn(val, idx, obj) {
            return idx === 1 && typeof val === "undefined";
        }
        var arr = [0, , 2];

        Object.defineProperty(arr, "0", {
            get: function () {
                delete Array.prototype[1];
                return 0;
            },
            configurable: true
        });

        try {
            Array.prototype[1] = 1;
            var testResult = arr.map(callbackfn);
            return testResult.length === 3 && typeof testResult[1] === "undefined";
        } finally {
            delete Array.prototype[1];
        }
    }
runTestCase(testcase);
