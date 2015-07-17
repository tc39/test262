// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.7-5-b-262
description: >
    Object.defineProperties - TypeError is thrown if both 'set'
    property and 'writable' property of 'descObj' are present (8.10.5
    step 9.a)
includes: [runTestCase.js]
---*/

function testcase() {

        var setFun = function () { };
        var obj = {};

        try {
            Object.defineProperties(obj, {
                prop: {
                    writable: true,
                    set: setFun
                }
            });
            return false;
        } catch (e) {
            return (e instanceof TypeError);
        }
    }
runTestCase(testcase);
