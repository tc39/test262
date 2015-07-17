// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.6-3-206
description: >
    Object.defineProperty - 'get' property in 'Attributes' is not
    present (8.10.5 step 7)
includes: [runTestCase.js]
---*/

function testcase() {
        var obj = {};

        Object.defineProperty(obj, "property", {
            set: function () {}
        });

        return typeof obj.property === "undefined" && obj.hasOwnProperty("property");
    }
runTestCase(testcase);
