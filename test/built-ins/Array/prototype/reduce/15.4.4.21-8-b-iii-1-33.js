// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.21-8-b-iii-1-33
description: >
    Array.prototype.reduce - exception in getter terminates iteration
    on an Array
includes: [runTestCase.js]
---*/

function testcase() {

        var accessed = false;
        var testResult = false;
        function callbackfn(prevVal, curVal, idx, obj) {
            if (idx >= 1) {
                accessed = true;
                testResult = (prevVal === 0);
            }
        }

        var arr = [, 1, 2];

        Object.defineProperty(arr, "0", {
            get: function () {
                throw new RangeError("unhandle exception happened in getter");
            },
            configurable: true
        });

        try {
            arr.reduce(callbackfn);
            return false;
        } catch (ex) {
            return (ex instanceof RangeError) && !accessed && !testResult;
        }
    }
runTestCase(testcase);
