// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.6-4-152
description: >
    Object.defineProperty - 'O' is an Array, 'name' is the length
    property of 'O',  test RangeError is thrown when the [[Value]]
    field of 'desc' is a positive non-integer values (15.4.5.1 step
    3.c)
includes: [runTestCase.js]
---*/

function testcase() {

        var arrObj = [];

        try {
            Object.defineProperty(arrObj, "length", {
                value: 123.5
            });

            return false;
        } catch (e) {
            return e instanceof RangeError;
        }
    }
runTestCase(testcase);
