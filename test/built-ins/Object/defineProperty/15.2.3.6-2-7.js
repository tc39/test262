// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.6-2-7
description: >
    Object.defineProperty - argument 'P' is a number that converts to
    a string (value is +0)
includes: [runTestCase.js]
---*/

function testcase() {
        var obj = {};
        Object.defineProperty(obj, +0, {});

        return obj.hasOwnProperty("0");

    }
runTestCase(testcase);
