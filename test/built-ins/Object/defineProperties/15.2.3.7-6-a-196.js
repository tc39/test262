// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.7-6-a-196
description: >
    Object.defineProperties - 'O' is an Array, 'P' is an array index
    named property, 'P' property doesn't exist in 'O', test [[Value]]
    of 'P' property in 'Attributes' is set as undefined value if
    [[Value]] is absent in data descriptor 'desc'  (15.4.5.1 step 4.c)
includes: [runTestCase.js]
---*/

function testcase() {
        var arr = [];

        Object.defineProperties(arr, {
            "0": {
                writable: true,
                enumerable: true,
                configurable: false
            }
        });

        return arr.hasOwnProperty("0") && typeof (arr[0]) === "undefined";
    }
runTestCase(testcase);
