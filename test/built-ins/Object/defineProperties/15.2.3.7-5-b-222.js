// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.7-5-b-222
description: >
    Object.defineProperties - value of 'get' property of 'descObj' is
    applied to Array object (8.10.5 step 7.b)
includes: [runTestCase.js]
---*/

function testcase() {
        var obj = {};

        try {
            Object.defineProperties(obj, {
                property: {
                    get: []
                }
            });

            return false;
        } catch (e) {
            return (e instanceof TypeError);
        }
    }
runTestCase(testcase);
