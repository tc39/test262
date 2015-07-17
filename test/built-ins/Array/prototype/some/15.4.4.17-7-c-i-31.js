// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.17-7-c-i-31
description: >
    Array.prototype.some - unhandled exceptions happened in getter
    terminate iteration on an Array
includes: [runTestCase.js]
---*/

function testcase() {

        var accessed = false;
        function callbackfn(val, idx, obj) {
            if (idx > 0) {
                accessed = true;
            }
            return true;
        }

        var arr = [];
        arr[10] = 100;
        Object.defineProperty(arr, "0", {
            get: function () {
                throw new RangeError("unhandle exception happened in getter");
            },
            configurable: true
        });

        try {
            arr.some(callbackfn);
            return false;
        } catch (ex) {
            return ex instanceof RangeError && !accessed;
        }
    }
runTestCase(testcase);
