// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.14-5-a-4
description: >
    Object.keys - Verify that 'configurable' attribute of element of
    returned array is correct
includes: [runTestCase.js]
---*/

function testcase() {
        var obj = { prop1: 100 };

        var array = Object.keys(obj);
        var desc = Object.getOwnPropertyDescriptor(array, "0");

        delete array[0];

        return typeof array[0] === "undefined" && desc.hasOwnProperty("configurable") && desc.configurable === true;
    }
runTestCase(testcase);
