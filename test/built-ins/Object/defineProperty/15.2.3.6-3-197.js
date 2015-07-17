// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.6-3-197
description: >
    Object.defineProperty - 'writable' property in 'Attributes' is a
    RegExp object (8.10.5 step 6.b)
includes: [runTestCase.js]
---*/

function testcase() {
        var obj = {};

        Object.defineProperty(obj, "property", {
            writable: new RegExp()
        });

        var beforeWrite = obj.hasOwnProperty("property") && typeof obj.property === "undefined";

        obj.property = "isWritable";

        var afterWrite = (obj.property === "isWritable");

        return beforeWrite && afterWrite;
    }
runTestCase(testcase);
