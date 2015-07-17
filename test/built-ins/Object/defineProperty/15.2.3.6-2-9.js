// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.6-2-9
description: >
    Object.defineProperty - argument 'P' is a number that converts to
    a string (value is a positive number)
includes: [runTestCase.js]
---*/

function testcase() {
        var obj = {};
        Object.defineProperty(obj, 30, {});

        return obj.hasOwnProperty("30");

    }
runTestCase(testcase);
