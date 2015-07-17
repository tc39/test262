// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.6-4-395
description: ES5 Attributes - [[Value]] attribute of data property is null
includes: [runTestCase.js]
---*/

function testcase() {
        var obj = {};

        Object.defineProperty(obj, "prop", {
            value: null
        });

        var desc = Object.getOwnPropertyDescriptor(obj, "prop");

        return obj.prop === null && desc.value === null;
    }
runTestCase(testcase);
