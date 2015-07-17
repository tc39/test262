// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.6-4-571
description: >
    ES5 Attributes - [[Get]] attribute is a function which involves
    'this' object into statement(s)
includes: [runTestCase.js]
---*/

function testcase() {
        var obj = {
            len: 2010
        };
        var getFunc = function () {
            return this;
        };

        Object.defineProperty(obj, "prop", {
            get: getFunc
        });

        var desc = Object.getOwnPropertyDescriptor(obj, "prop");

        return obj.hasOwnProperty("prop") && obj.prop === obj && desc.get === getFunc;
    }
runTestCase(testcase);
