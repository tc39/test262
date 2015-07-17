// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.6-2-26
description: >
    Object.defineProperty - argument 'P' is an integer that converts
    to a string (value is 123)
includes: [runTestCase.js]
---*/

function testcase() {
        var obj = {};
        Object.defineProperty(obj, 123, {});

        return obj.hasOwnProperty("123");

    }
runTestCase(testcase);
