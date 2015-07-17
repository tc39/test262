// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.15-3-10
description: >
    Array.prototype.lastIndexOf - value of 'length' is a number (value
    is NaN)
includes: [runTestCase.js]
---*/

function testcase() {

        var obj = { 0: 0, length: NaN };

        return Array.prototype.lastIndexOf.call(obj, 0) === -1;
    }
runTestCase(testcase);
