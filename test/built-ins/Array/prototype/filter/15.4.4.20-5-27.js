// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.20-5-27
description: >
    Array.prototype.filter - Array.isArray(arg) returns true when arg
    is the returned array
includes: [runTestCase.js]
---*/

function testcase() {

        var newArr = [11].filter(function () { });

        return Array.isArray(newArr);
    }
runTestCase(testcase);
