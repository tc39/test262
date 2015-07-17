// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.19-4-12
description: Array.prototype.map - 'callbackfn' is a function
includes: [runTestCase.js]
---*/

function testcase() {

        function callbackfn(val, idx, obj) {
            return val > 10;
        }

        var testResult = [11, 9].map(callbackfn);
        return testResult.length === 2 && testResult[0] === true && testResult[1] === false;
    }
runTestCase(testcase);
