// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.6-2-36
description: Object.defineProperty - argument 'P' is applied to string 'null'
includes: [runTestCase.js]
---*/

function testcase() {
        var obj = {};
        Object.defineProperty(obj, "null", {});

        return obj.hasOwnProperty("null");

    }
runTestCase(testcase);
