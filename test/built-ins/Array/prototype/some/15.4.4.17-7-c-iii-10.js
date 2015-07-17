// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.17-7-c-iii-10
description: >
    Array.prototype.some - return value of callbackfn is a number
    (value is Infinity)
includes: [runTestCase.js]
---*/

function testcase() {

        function callbackfn(val, idx, obj) {
            return Infinity;
        }

        return [11].some(callbackfn);
    }
runTestCase(testcase);
