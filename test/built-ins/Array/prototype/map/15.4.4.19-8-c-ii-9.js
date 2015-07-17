// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.19-8-c-ii-9
description: Array.prototype.map - callbackfn with 0 formal parameter
includes: [runTestCase.js]
---*/

function testcase() {

        function callbackfn() {
            return true;
        }

        var testResult = [11].map(callbackfn);

        return testResult[0] === true;
    }
runTestCase(testcase);
