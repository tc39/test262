// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.6-3-127
description: >
    Object.defineProperty - 'value' property in 'Attributes' is not
    present  (8.10.5 step 5)
includes: [runTestCase.js]
---*/

function testcase() {
        var obj = { };

        var attr = {
            writable: true
        };

        Object.defineProperty(obj, "property", attr);

        return obj.hasOwnProperty("property") && typeof (obj.property) === "undefined";
    }
runTestCase(testcase);
