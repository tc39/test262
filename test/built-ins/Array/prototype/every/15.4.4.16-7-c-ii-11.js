// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.16-7-c-ii-11
description: >
    Array.prototype.every - callbackfn is called with 2 formal
    parameter
includes: [runTestCase.js]
---*/

function testcase() {

        var called = 0;

        function callbackfn(val, idx) {
            called++;
            return val > 10 && arguments[2][idx] === val;
        }

        return [11, 12].every(callbackfn) && 2 === called;
    }
runTestCase(testcase);
