// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.4-2-3
description: >
    Object.getOwnPropertyNames - length of returned array is
    initialized to 0
includes: [runTestCase.js]
---*/

function testcase() {

        var obj = {};
        var result = Object.getOwnPropertyNames(obj);

        return result.length === 0;
    }
runTestCase(testcase);
