// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.19-5-23
description: Array.prototype.map - number primitive can be used as thisArg
includes: [runTestCase.js]
---*/

function testcase() {

        function callbackfn(val, idx, obj) {
            return this.valueOf() === 101;
        }

        var testResult = [11].map(callbackfn, 101);
        return testResult[0] === true;
    }
runTestCase(testcase);
