// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.6-2-32
description: >
    Object.defineProperty - argument 'P' is a number that converts to
    a string (value is 123.1234567)
includes: [runTestCase.js]
---*/

function testcase() {
        var obj = {};
        Object.defineProperty(obj, 123.1234567, {});

        return obj.hasOwnProperty("123.1234567");

    }
runTestCase(testcase);
