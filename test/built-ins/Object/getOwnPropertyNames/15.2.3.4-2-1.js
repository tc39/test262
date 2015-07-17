// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.4-2-1
description: >
    Object.getOwnPropertyNames - returned array is an array according
    to Array.isArray
includes: [runTestCase.js]
---*/

function testcase() {

        var obj = {};
        var result = Object.getOwnPropertyNames(obj);

        return Array.isArray(result);
    }
runTestCase(testcase);
