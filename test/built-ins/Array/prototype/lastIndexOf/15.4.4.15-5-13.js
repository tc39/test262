// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.15-5-13
description: >
    Array.prototype.lastIndexOf - value of 'fromIndex' is a number
    (value is -Infinity)
includes: [runTestCase.js]
---*/

function testcase() {

        return [true].lastIndexOf(true, -Infinity) === -1;
    }
runTestCase(testcase);
