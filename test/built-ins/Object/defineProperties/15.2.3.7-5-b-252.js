// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.7-5-b-252
description: >
    Object.defineProperties - value of 'set' property of 'descObj' is
    undefined (8.10.5 step 8.b)
includes: [runTestCase.js]
---*/

function testcase() {

        var getFun = function () {
            return 11;
        };

        var obj = {};
        Object.defineProperties(obj, {
            prop: {
                get: getFun,
                set: undefined
            }
        });

        try {
            var desc = Object.getOwnPropertyDescriptor(obj, "prop");
            return obj.hasOwnProperty("prop") && typeof (desc.set) === "undefined";
        } catch (e) {
            return false;
        }
    }
runTestCase(testcase);
