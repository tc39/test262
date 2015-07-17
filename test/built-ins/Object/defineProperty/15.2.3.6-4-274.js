// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.6-4-274
description: >
    Object.defineProperty - 'O' is an Array, 'name' is an array index
    named property, test the length property of 'O' is not changed if
    ToUint32('name') is less than value of the length property in 'O'
    (15.4.5.1 step 4.e)
includes: [runTestCase.js]
---*/

function testcase() {

        var arrObj = [];
        arrObj.length = 3; // default value of length: writable: true, configurable: false, enumerable: false

        Object.defineProperty(arrObj, "1", {
            value: 14
        });

        return arrObj.length === 3 && arrObj[1] === 14;
    }
runTestCase(testcase);
