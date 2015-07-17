// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.6-4-386
description: >
    ES5 Attributes - [[Value]] attribute of data property is an Array
    object
includes: [runTestCase.js]
---*/

function testcase() {
        var obj = {};
        var arrObj = [];

        Object.defineProperty(obj, "prop", {
            value: arrObj
        });

        var desc = Object.getOwnPropertyDescriptor(obj, "prop");

        return obj.prop === arrObj && desc.value === arrObj;
    }
runTestCase(testcase);
