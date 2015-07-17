// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.15-5-32
description: >
    Array.prototype.lastIndexOf - 'fromIndex' is a negative
    non-integer, verify truncation occurs in the proper direction
includes: [runTestCase.js]
---*/

function testcase() {
        var targetObj = {};
        return [0, targetObj, true].lastIndexOf(targetObj, -2.5) === 1 &&
            [0, true, targetObj].lastIndexOf(targetObj, -2.5) === -1;

    }
runTestCase(testcase);
