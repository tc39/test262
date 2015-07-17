// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.7-6-a-27
description: >
    Object.defineProperties - 'P' doesn't exist in 'O', test [[Value]]
    of 'P' is set as undefined value if absent in data descriptor
    'desc' (8.12.9 step 4.a.i)
includes: [runTestCase.js]
---*/

function testcase() {
        var obj = {};

        Object.defineProperties(obj, {
            prop: {
                writable: true
            }
        });

        var desc = Object.getOwnPropertyDescriptor(obj, "prop");

        return desc.hasOwnProperty("value") && typeof desc.value === "undefined" &&
            desc.hasOwnProperty("writable") && desc.writable === true &&
            desc.hasOwnProperty("configurable") && desc.configurable === false &&
            desc.hasOwnProperty("enumerable") && desc.enumerable === false;
    }
runTestCase(testcase);
