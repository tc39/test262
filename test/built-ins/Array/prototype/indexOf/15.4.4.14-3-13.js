// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.14-3-13
description: >
    Array.prototype.indexOf - 'length' is a string containing a
    decimal number
includes: [runTestCase.js]
---*/

function testcase() {

        var obj = { 199: true, 200: "200.59", length: "200.59" };

        return Array.prototype.indexOf.call(obj, true) === 199 &&
            Array.prototype.indexOf.call(obj, "200.59") === -1;
    }
runTestCase(testcase);
