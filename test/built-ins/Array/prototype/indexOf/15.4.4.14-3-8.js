// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.14-3-8
description: >
    Array.prototype.indexOf - value of 'length' is a number (value is
    Infinity)
includes: [runTestCase.js]
---*/

function testcase() {

        var obj = { 0: 0, length: Infinity };

        return Array.prototype.indexOf.call(obj, 0) === 0;
    }
runTestCase(testcase);
