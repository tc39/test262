// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.10-3-1
description: >
    Object.preventExtensions - Object.isExtensible(arg) returns false
    if arg is the returned object
includes: [runTestCase.js]
---*/

function testcase() {
        var obj = {};
        var preCheck = Object.isExtensible(obj);
        Object.preventExtensions(obj);

        return preCheck && !Object.isExtensible(obj);
    }
runTestCase(testcase);
