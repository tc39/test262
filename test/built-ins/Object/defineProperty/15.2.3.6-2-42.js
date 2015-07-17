// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.6-2-42
description: >
    Object.defineProperty - argument 'P' is a Number Object that
    converts to a string
includes: [runTestCase.js]
---*/

function testcase() {
        var obj = {};
        Object.defineProperty(obj, new Number(123), {});

        return obj.hasOwnProperty("123");

    }
runTestCase(testcase);
