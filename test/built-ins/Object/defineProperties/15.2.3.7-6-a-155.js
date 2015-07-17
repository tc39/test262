// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.7-6-a-155
description: >
    Object.defineProperties - 'O' is an Array, 'P' is the length
    property of 'O', test the [[Value]] field of 'desc' which is
    greater than value of the length property is defined into 'O'
    without deleting any property with large index named (15.4.5.1
    step 3.f)
includes: [runTestCase.js]
---*/

function testcase() {

        var arr = [0, , 2];

        try {
            Object.defineProperties(arr, {
                length: {
                    value: 5
                }
            });

            return arr.length === 5 && arr[0] === 0 && !arr.hasOwnProperty("1") && arr[2] === 2;
        } catch (e) {
            return false;
        }
    }
runTestCase(testcase);
