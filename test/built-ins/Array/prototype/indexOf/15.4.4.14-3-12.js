// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.14-3-12
description: >
    Array.prototype.indexOf - 'length' is a string containing a
    negative number
includes: [runTestCase.js]
---*/

function testcase() {

        var obj = { 1: "true", 2: "2", length: "-4294967294" };

        return Array.prototype.indexOf.call(obj, "true") === -1 &&
        Array.prototype.indexOf.call(obj, "2") === -1;
    }
runTestCase(testcase);
