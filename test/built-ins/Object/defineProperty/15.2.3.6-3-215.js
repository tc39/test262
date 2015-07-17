// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.6-3-215
description: >
    Object.defineProperty - 'get' property in 'Attributes' is own
    accessor property without a get function (8.10.5 step 7.a)
includes: [runTestCase.js]
---*/

function testcase() {
        var obj = {};

        var attributes = {};
        Object.defineProperty(attributes, "get", {
            set: function () { }
        });

        Object.defineProperty(obj, "property", attributes);

        return typeof obj.property === "undefined" && obj.hasOwnProperty("property");
    }
runTestCase(testcase);
