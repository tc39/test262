// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.21-9-c-i-32
description: >
    Array.prototype.reduce - unnhandled exceptions happened in getter
    terminate iteration on an Array-like object
includes: [runTestCase.js]
---*/

function testcase() {

        var accessed = false;
        var testResult = false;
        var initialValue = 0;
        function callbackfn(prevVal, curVal, idx, obj) {
            if (idx >= 1) {
                accessed = true;
                testResult = (curVal >= 1);
            }
        }

        var obj = { 0: 0, 2: 2, length: 3 };
        Object.defineProperty(obj, "1", {
            get: function () {
                throw new RangeError("unhandle exception happened in getter");
            },
            configurable: true
        });

        try {
            Array.prototype.reduce.call(obj, callbackfn, initialValue);
            return false;
        } catch (ex) {
            return (ex instanceof RangeError) && !accessed && !testResult;
        }
    }
runTestCase(testcase);
