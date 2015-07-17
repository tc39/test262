// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.6-2-35
description: >
    Object.defineProperty - argument 'P' is applied to string
    'undefined'
includes: [runTestCase.js]
---*/

function testcase() {
        var obj = {};
        Object.defineProperty(obj, "undefined", {});

        return obj.hasOwnProperty("undefined");

    }
runTestCase(testcase);
