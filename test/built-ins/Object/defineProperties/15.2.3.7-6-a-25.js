// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.7-6-a-25
description: >
    Object.defineProperties - 'P' doesn't exist in 'O', test TypeError
    is thrown when 'O' is not extensible (8.12.9 step 3)
includes: [runTestCase.js]
---*/

function testcase() {
        var obj = {};
        Object.preventExtensions(obj);

        try {
            Object.defineProperties(obj, {
                prop: {
                    value: 12,
                    configurable: true
                }
            });
            return false;
        } catch (e) {
            return e instanceof TypeError && !obj.hasOwnProperty("prop");
        }
    }
runTestCase(testcase);
