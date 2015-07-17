// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.6-4-391
description: >
    ES5 Attributes - [[Value]] attribute of data property is an Error
    object
includes: [runTestCase.js]
---*/

function testcase() {
        var obj = {};
        var errObj = new Error();

        Object.defineProperty(obj, "prop", {
            value: errObj
        });

        var desc = Object.getOwnPropertyDescriptor(obj, "prop");

        return obj.prop === errObj && desc.value === errObj;
    }
runTestCase(testcase);
