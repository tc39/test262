// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.19-5-10
description: Array.prototype.map - Array object can be used as thisArg
includes: [runTestCase.js]
---*/

function testcase() {

        var objArray = new Array(2);

        function callbackfn(val, idx, obj) {
            return this === objArray;
        }

        var testResult = [11].map(callbackfn, objArray);
        return testResult[0] === true;
    }
runTestCase(testcase);
