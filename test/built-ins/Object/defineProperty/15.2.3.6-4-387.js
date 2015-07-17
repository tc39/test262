// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.6-4-387
description: >
    ES5 Attributes - [[Value]] attribute of data property is a String
    object
includes: [runTestCase.js]
---*/

function testcase() {
        var obj = {};
        var strObj = new String();

        Object.defineProperty(obj, "prop", {
            value: strObj
        });

        var desc = Object.getOwnPropertyDescriptor(obj, "prop");

        return obj.prop === strObj && desc.value === strObj;
    }
runTestCase(testcase);
