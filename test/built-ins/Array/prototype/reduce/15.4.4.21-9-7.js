// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.21-9-7
description: >
    Array.prototype.reduce stops calling callbackfn once the array is
    deleted during the call
includes: [runTestCase.js]
---*/

function testcase() {
        function callbackfn(prevVal, curVal, idx, obj) {
            delete o.arr;
            return prevVal + curVal;
        }

        var o = new Object();
        o.arr = ['1', 2, 3, 4, 5];
        return o.arr.reduce(callbackfn) === "12345" && !o.hasOwnProperty("arr");
    }
runTestCase(testcase);
