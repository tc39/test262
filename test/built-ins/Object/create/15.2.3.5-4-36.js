// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.5-4-36
description: >
    Object.create - 'Properties' is the JSON object that uses Object's
    [[Get]] method to access own enumerable property (15.2.3.7 step
    5.a)
includes: [runTestCase.js]
---*/

function testcase() {

        try {
            JSON.prop = {
                value: 12,
                enumerable: true
            };
            var newObj = Object.create({}, JSON);
            return newObj.hasOwnProperty("prop");
        } finally {
            delete JSON.prop;
        }
    }
runTestCase(testcase);
