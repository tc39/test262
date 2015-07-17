// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.14-3-6
description: >
    Array.prototype.indexOf - value of 'length' is a number (value is
    positive)
includes: [runTestCase.js]
---*/

function testcase() {

        var obj = { 3: true, 4: false, length: 4 };

        return Array.prototype.indexOf.call(obj, true) === 3 &&
            Array.prototype.indexOf.call(obj, false) === -1;
    }
runTestCase(testcase);
