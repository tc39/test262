// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.14-5-15
description: >
    Object.keys - own enumerable indexed data property of String
    object 'O' is defined in returned array
includes: [runTestCase.js]
---*/

function testcase() {
        var obj = new String("xyz");
        obj[-20] = -20;
        obj[20] = 20;

        Object.defineProperty(obj, "prop", {
            value: 1003,
            enumerable: false,
            configurable: true
        });

        var arr = Object.keys(obj);

        for (var i = 0; i < arr.length; i++) {
            if (!obj.hasOwnProperty(arr[i])) {
                return false;
            }
        }

        return true;
    }
runTestCase(testcase);
