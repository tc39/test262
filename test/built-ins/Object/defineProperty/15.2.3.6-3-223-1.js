// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.6-3-223-1
description: >
    Object.defineProperty - 'Attributes' is the Math object that uses
    Object's [[Get]] method to access the 'get' property of prototype
    object (8.10.5 step 7.a)
includes: [runTestCase.js]
---*/

function testcase() {
        var obj = {};

        try {
            Object.prototype.get = function () {
                return "mathGetProperty";
            };

            Object.defineProperty(obj, "property", Math);

            return obj.property === "mathGetProperty";
        } finally {
            delete Object.prototype.get;
        }
    }
runTestCase(testcase);
