// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.6-2-40
description: >
    Object.defineProperty - argument 'P' is a String Object that
    converts to a string
includes: [runTestCase.js]
---*/

function testcase() {
        var obj = {};
        Object.defineProperty(obj, new String("Hello"), {});

        return obj.hasOwnProperty("Hello");

    }
runTestCase(testcase);
