// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.7-6-a-158
description: >
    Object.defineProperties - 'O' is an Array, 'P' is the length
    property of 'O', the [[Value]] field of 'desc' is greater than
    value of the length property, test TypeError is thrown when the
    length property is not writable (15.4.5.1 step 3.f.i)
includes: [runTestCase.js]
---*/

function testcase() {

        var arr = [];

        Object.defineProperty(arr, "length", {
            writable: false
        });

        try {
            Object.defineProperties(arr, {
                length: {
                    value: 12
                }
            });

            return false;
        } catch (e) {
            return e instanceof TypeError && arr.length === 0;
        }
    }
runTestCase(testcase);
