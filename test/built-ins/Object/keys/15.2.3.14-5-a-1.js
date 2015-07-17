// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.14-5-a-1
description: >
    Object.keys - 'value' attribute of element in returned array is
    correct.
includes: [runTestCase.js]
---*/

function testcase() {
        var obj = { prop1: 1 };

        var array = Object.keys(obj);

        var desc = Object.getOwnPropertyDescriptor(array, "0");

        return desc.hasOwnProperty("value") && desc.value === "prop1";
    }
runTestCase(testcase);
