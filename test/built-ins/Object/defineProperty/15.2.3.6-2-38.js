// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.6-2-38
description: Object.defineProperty - argument 'P' is applied to string '1'
includes: [runTestCase.js]
---*/

function testcase() {
        var obj = {};
        Object.defineProperty(obj, "1", {});

        return obj.hasOwnProperty("1");

    }
runTestCase(testcase);
