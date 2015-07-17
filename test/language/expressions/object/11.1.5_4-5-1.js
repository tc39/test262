// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: >
    Refer 11.1.5; 
    The production
    PropertyNameAndValueList : PropertyNameAndValueList , PropertyAssignment 
    5.Call the [[DefineOwnProperty]] internal method of obj with arguments propId.name, propId.descriptor, and false.
es5id: 11.1.5_4-5-1
description: >
    Object initialization using PropertyNameAndValueList
    (PropertyNameAndValueList , PropertyAssignment) when property
    (read-only) exists in Object.prototype (Step 5)
includes: [runTestCase.js]
---*/

function testcase() {
        try {
            Object.defineProperty(Object.prototype, "prop2", {
                value: 100,
                writable: false,
                configurable: true
            });

            var obj = { prop1: 101, prop2: 12 };

            return obj.hasOwnProperty("prop2");
        } finally {
            delete Object.prototype.prop2;
        }
    }
runTestCase(testcase);
