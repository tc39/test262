// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.19-6-1
description: >
    Array.prototype.map - Array.isArray returns true when input
    argument is the ourput array
includes: [runTestCase.js]
---*/

function testcase() {

        var newArr = [11].map(function () { });

        return Array.isArray(newArr);

    }
runTestCase(testcase);
