// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.15-5-18
description: >
    Array.prototype.lastIndexOf - value of 'fromIndex' is a string
    containing an exponential number
includes: [runTestCase.js]
---*/

function testcase() {
        var targetObj = {};
        return [0, NaN, targetObj, 3, false].lastIndexOf(targetObj, "2E0") === 2 &&
            [0, NaN, 3, targetObj, false].lastIndexOf(targetObj, "2E0") === -1;
    }
runTestCase(testcase);
