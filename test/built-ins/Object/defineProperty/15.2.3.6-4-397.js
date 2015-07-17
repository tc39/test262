// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.6-4-397
description: ES5 Attributes - [[Value]] attribute of data property is Infinity
includes: [runTestCase.js]
---*/

function testcase() {
        var obj = {};

        Object.defineProperty(obj, "prop", {
            value: Infinity
        });

        var desc = Object.getOwnPropertyDescriptor(obj, "prop");

        return obj.prop === Infinity && desc.value === Infinity;
    }
runTestCase(testcase);
