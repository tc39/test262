// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.15-5-14
description: >
    Array.prototype.lastIndexOf - value of 'fromIndex' is a number
    (value is NaN)
includes: [runTestCase.js]
---*/

function testcase() {

        return [0, true].lastIndexOf(true, NaN) === -1 && // from Index will be convert to +0
            [true, 0].lastIndexOf(true, NaN) === 0 &&
            [0, true].lastIndexOf(true, -NaN) === -1 &&
            [true, 0].lastIndexOf(true, -NaN) === 0;
    }
runTestCase(testcase);
