// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.10-3-23
description: >
    Object.preventExtensions - properties can still be reassigned
    after extensions have been prevented
includes: [runTestCase.js]
---*/

function testcase() {
        var obj = { prop: 12 };
        var preCheck = Object.isExtensible(obj);
        Object.preventExtensions(obj);

        obj.prop = -1;

        return preCheck && obj.prop === -1;
    }
runTestCase(testcase);
