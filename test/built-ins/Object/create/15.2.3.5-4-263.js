// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.5-4-263
description: >
    Object.create - 'get' property of one property in 'Properties' is
    a function (8.10.5 step 7.b)
includes: [runTestCase.js]
---*/

function testcase() {
        var newObj = Object.create({}, {
            prop: {
                get: function () { }
            }
        });

        return newObj.hasOwnProperty("prop") && typeof newObj.prop === "undefined";
    }
runTestCase(testcase);
