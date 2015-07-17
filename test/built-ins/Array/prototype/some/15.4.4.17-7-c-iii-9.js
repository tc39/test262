// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.17-7-c-iii-9
description: >
    Array.prototype.some - return value of callbackfn is a number
    (value is negative number)
includes: [runTestCase.js]
---*/

function testcase() {

        function callbackfn(val, idx, obj) {
            return -5;
        }

        return [11].some(callbackfn);
    }
runTestCase(testcase);
