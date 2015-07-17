// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.5-4-16
description: >
    Object.create - own enumerable data property in 'Properties' is
    defined in 'obj' (15.2.3.7 step 3)
includes: [runTestCase.js]
---*/

function testcase() {

        var newObj = Object.create({}, {
            prop: {} 
        });
        return newObj.hasOwnProperty("prop");
    }
runTestCase(testcase);
