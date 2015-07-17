// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.6-3-145-1
description: >
    Object.defineProperty - 'Attributes' is a Date object that uses
    Object's [[Get]] method to access the 'value' property of
    prototype object  (8.10.5 step 5.a)
includes: [runTestCase.js]
---*/

function testcase() {
        var obj = {};
        try {
            Date.prototype.value = "Date";
            var dateObj = new Date();

            Object.defineProperty(obj, "property", dateObj);

            return obj.property === "Date";
        } finally {
            delete Date.prototype.value;
        }
    }
runTestCase(testcase);
