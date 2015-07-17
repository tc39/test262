// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.14-5-a-2
description: >
    Object.keys - 'writable' attribute of element of returned array is
    correct
includes: [runTestCase.js]
---*/

function testcase() {
        var obj = { prop1: 100 };

        var array = Object.keys(obj);

        try {
            array[0] = "isWritable";

            var desc = Object.getOwnPropertyDescriptor(array, "0");

            return array[0] === "isWritable" && desc.hasOwnProperty("writable") && desc.writable === true;
        } catch (e) {
            return false;
        }
    }
runTestCase(testcase);
