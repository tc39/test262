// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.3-2-30
description: >
    Object.getOwnPropertyDescriptor - argument 'P' is a number that
    converts to a string (value is 100000000000000000000.123)
includes: [runTestCase.js]
---*/

function testcase() {
        var obj = { "100000000000000000000": 1 };

        var desc = Object.getOwnPropertyDescriptor(obj, 100000000000000000000.123);

        return typeof desc !== "undefined" && desc.value === 1;
    }
runTestCase(testcase);
