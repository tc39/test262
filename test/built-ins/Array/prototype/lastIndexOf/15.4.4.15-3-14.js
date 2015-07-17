// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.15-3-14
description: >
    Array.prototype.lastIndexOf - value of 'length' is a string
    containing -Infinity
includes: [runTestCase.js]
---*/

function testcase() {

        var objThree = { 0: true, 1: true, length: "-Infinity" };

        return Array.prototype.lastIndexOf.call(objThree, true) === -1;
    }
runTestCase(testcase);
