// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.5-4-174
description: >
    Object.create - one property in 'Properties' is an Error object
    that uses Object's [[Get]] method to access the 'value' property
    (8.10.5 step 5.a)
includes: [runTestCase.js]
---*/

function testcase() {

        var errorObj = new Error();

        errorObj.value = "ErrorValue";

        var newObj = Object.create({}, {
            prop: errorObj
        });

        return newObj.prop === "ErrorValue";
    }
runTestCase(testcase);
