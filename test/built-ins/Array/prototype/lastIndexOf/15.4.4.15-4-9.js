// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.15-4-9
description: Array.prototype.lastIndexOf - 'length' is a number of value 0.1
includes: [runTestCase.js]
---*/

function testcase() {
        var targetObj = [];
        var obj = { 0: targetObj, 100: targetObj, length: 0.1 };
        return Array.prototype.lastIndexOf.call(obj, targetObj) === -1;
    }
runTestCase(testcase);
