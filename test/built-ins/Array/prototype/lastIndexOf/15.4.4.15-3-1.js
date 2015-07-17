// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.15-3-1
description: Array.prototype.lastIndexOf - value of 'length' is undefined
includes: [runTestCase.js]
---*/

function testcase() {

        var obj = { 0: 1, 1: 1, length: undefined };

        return Array.prototype.lastIndexOf.call(obj, 1) === -1;
    }
runTestCase(testcase);
