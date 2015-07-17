// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.19-5-11
description: Array.prototype.map - String object can be used as thisArg
includes: [runTestCase.js]
---*/

function testcase() {

        var objString = new String();

        function callbackfn(val, idx, obj) {
            return this === objString;
        }

        var testResult = [11].map(callbackfn, objString);
        return testResult[0] === true;
    }
runTestCase(testcase);
