// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.7-6-a-181
description: >
    Object.defineProperties - 'O' is an Array, 'P' is an array index
    named property, 'P' is boundary value 2^32 (15.4.5.1 step 4.a)
includes: [runTestCase.js]
---*/

function testcase() {
        var arr = [];

        Object.defineProperties(arr, {
            "4294967296": {
                value: 100
            }
        });

        return arr.hasOwnProperty("4294967296") && arr.length === 0 && arr[4294967296] === 100;
    }
runTestCase(testcase);
