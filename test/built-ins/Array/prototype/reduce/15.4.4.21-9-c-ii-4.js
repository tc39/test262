// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.21-9-c-ii-4
description: >
    Array.prototype.reduce - k values are passed in acending numeric
    order on an Array
includes: [runTestCase.js]
---*/

function testcase() {

        var arr = [0, 1, 2];
        var lastIdx = 0;
        var result = true;
        var accessed = false;

        function callbackfn(prevVal, curVal, idx, obj) {
            accessed = true;
            if (lastIdx !== idx) {
                result = false;
            } else {
                lastIdx++;
            }
        }

        arr.reduce(callbackfn, 11);
        return result && accessed;
    }
runTestCase(testcase);
