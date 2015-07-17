// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.5-4-79
description: >
    Object.create -  'enumerable' property of one property in
    'Properties' is NaN (8.10.5 step 3.b)
includes: [runTestCase.js]
---*/

function testcase() {
       
        var accessed = false;

        var newObj = Object.create({}, {
            prop: {
                enumerable: NaN
            }
        });
        for (var property in newObj) {
            if (property === "prop") {
                accessed = true;
            }
        }
        return !accessed && newObj.hasOwnProperty("prop");
    }
runTestCase(testcase);
