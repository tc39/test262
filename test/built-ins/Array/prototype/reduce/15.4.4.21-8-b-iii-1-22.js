// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.21-8-b-iii-1-22
description: >
    Array.prototype.reduce - element to be retrieved is inherited
    accessor property without a get function on an Array
includes: [runTestCase.js]
---*/

function testcase() {
    
        var testResult = false;
        function callbackfn(prevVal, curVal, idx, obj) {
            if (idx === 1) {
                testResult = (prevVal === undefined);
            }
        }

        try {
            Object.defineProperty(Array.prototype, "0", {
                set: function () { },
                configurable: true
            });

            var arr = [, 1, 2];

            arr.reduce(callbackfn);
            return testResult;

        } finally {
            delete Array.prototype[0];
        }

    }
runTestCase(testcase);
