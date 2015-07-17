// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.6-4-568
description: >
    ES5 Attributes - [[Get]] attribute is a function which has two
    arguments
includes: [runTestCase.js]
---*/

function testcase() {
        var obj = {};
        var getFunc = function (arg1, arg2) {
            return 2010;
        };

        Object.defineProperty(obj, "prop", {
            get: getFunc
        });

        var desc = Object.getOwnPropertyDescriptor(obj, "prop");

        return obj.hasOwnProperty("prop") && obj.prop === 2010 && desc.get === getFunc;
    }
runTestCase(testcase);
