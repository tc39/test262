// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.6-4-128
description: >
    Object.defineProperty -  'O' is an Array, 'name' is the length
    property of 'O', test the [[Value]] field of 'desc' is a boolean
    with value true (15.4.5.1 step 3.c)
includes: [runTestCase.js]
---*/

function testcase() {

        var arrObj = [];

        Object.defineProperty(arrObj, "length", {
            value: true
        });
        return arrObj.length === 1;

    }
runTestCase(testcase);
