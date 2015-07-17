// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.14-5-8
description: >
    Array.prototype.indexOf - value of 'fromIndex' is a number (value
    is +0)
includes: [runTestCase.js]
---*/

function testcase() {

        return [true].indexOf(true, +0) === 0;
    }
runTestCase(testcase);
