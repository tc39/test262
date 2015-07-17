// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.14-3-2
description: >
    Array.prototype.indexOf return -1 when 'length' is a boolean
    (value is true)
includes: [runTestCase.js]
---*/

function testcase() {
        var obj = { 0: 0, 1: 1, length: true };
        return Array.prototype.indexOf.call(obj, 0) === 0 &&
            Array.prototype.indexOf.call(obj, 1) === -1;
    }
runTestCase(testcase);
