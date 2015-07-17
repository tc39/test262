// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.15-5-11
description: >
    Array.prototype.lastIndexOf - value of 'fromIndex' is a number
    (value is negative number)
includes: [runTestCase.js]
---*/

function testcase() {
        var targetObj = {};
        return [0, targetObj, true].lastIndexOf(targetObj, -2.5) === 1 &&
            [0, true, targetObj].lastIndexOf(targetObj, -2.5) === -1;
    }
runTestCase(testcase);
