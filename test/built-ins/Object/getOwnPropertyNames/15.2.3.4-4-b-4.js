// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.4-4-b-4
description: >
    Object.getOwnPropertyNames - elements of the returned array are
    writable
includes: [runTestCase.js]
---*/

function testcase() {
        var obj = { "a": "a" };

        var result = Object.getOwnPropertyNames(obj);

        try {
            var beforeOverride = (result[0] === "a");
            result[0] = "b";
            var afterOverride = (result[0] === "b");

            return beforeOverride && afterOverride;
        } catch (ex) {
            return false;
        }
    }
runTestCase(testcase);
