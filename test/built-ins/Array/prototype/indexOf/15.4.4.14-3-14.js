// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.14-3-14
description: >
    Array.prototype.indexOf - 'length' is a string containing
    +/-Infinity
includes: [runTestCase.js]
---*/

function testcase() {

        var objOne = { 0: true, 1: true, length: "Infinity" };
        var objTwo = { 0: true, 1: true, length: "+Infinity" };
        var objThree = { 0: true, 1: true, length: "-Infinity" };

        return Array.prototype.indexOf.call(objOne, true) === 0 &&
            Array.prototype.indexOf.call(objTwo, true) === 0 &&
            Array.prototype.indexOf.call(objThree, true) === -1;
    }
runTestCase(testcase);
