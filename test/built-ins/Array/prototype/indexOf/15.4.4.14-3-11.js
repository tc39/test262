// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.14-3-11
description: >
    Array.prototype.indexOf - 'length' is a string containing a
    positive number
includes: [runTestCase.js]
---*/

function testcase() {

        var obj = { 1: 1, 2: 2, length: "2" };

        return Array.prototype.indexOf.call(obj, 1) === 1 &&
        Array.prototype.indexOf.call(obj, 2) === -1;
    }
runTestCase(testcase);
