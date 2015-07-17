// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.6-3-146
description: >
    Object.defineProperty - 'Attributes' is a RegExp object that uses
    Object's [[Get]] method to access the 'value' property  (8.10.5
    step 5.a)
includes: [runTestCase.js]
---*/

function testcase() {
        var obj = { };

        var regObj = new RegExp();

        regObj.value = "RegExp";

        Object.defineProperty(obj, "property", regObj);

        return obj.property === "RegExp";
    }
runTestCase(testcase);
