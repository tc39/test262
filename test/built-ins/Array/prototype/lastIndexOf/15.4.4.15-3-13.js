// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.15-3-13
description: >
    Array.prototype.lastIndexOf - value of 'length' is a string
    containing a decimal number
includes: [runTestCase.js]
---*/

function testcase() {

        var obj = { 4: 4, 5: 5, length: "5.512345" };

        return Array.prototype.lastIndexOf.call(obj, 4) === 4 &&
            Array.prototype.lastIndexOf.call(obj, 5) === -1;
    }
runTestCase(testcase);
