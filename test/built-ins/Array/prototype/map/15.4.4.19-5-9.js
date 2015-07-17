// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.19-5-9
description: Array.prototype.map - Function object can be used as thisArg
includes: [runTestCase.js]
---*/

function testcase() {

        var objFunction = function () { };

        function callbackfn(val, idx, obj) {
            return this === objFunction;
        }

        var testResult = [11].map(callbackfn, objFunction);
        return testResult[0] === true;
    }
runTestCase(testcase);
