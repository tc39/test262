// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.18-7-c-ii-4
description: >
    Array.prototype.forEach - k values are passed in ascending numeric
    order
includes: [runTestCase.js]
---*/

function testcase() {

        var arr = [0, 1, 2, 3, 4, 5];
        var lastIdx = 0;
        var called = 0;
        var result = true;
        function callbackfn(val, idx, o) {
            called++;
            if (lastIdx !== idx) {
                result = false;
            } else {
                lastIdx++;
            }
        }

        arr.forEach(callbackfn);
        return result && arr.length === called;
    }
runTestCase(testcase);
