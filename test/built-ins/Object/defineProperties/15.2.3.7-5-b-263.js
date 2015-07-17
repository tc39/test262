// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.7-5-b-263
description: >
    Object.defineProperties - TypeError is thrown if both 'get'
    property and 'value' property of 'descObj' are present (8.10.5
    step 9.a)
includes: [runTestCase.js]
---*/

function testcase() {

        var getFun = function () {};
        var obj = {};

        try {
            Object.defineProperties(obj, {
                prop: {
                    value: 12,
                    get: getFun
                }
            });
            return false;
        } catch (e) {
            return (e instanceof TypeError);
        }
    }
runTestCase(testcase);
