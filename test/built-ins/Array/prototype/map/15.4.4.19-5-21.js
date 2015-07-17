// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.19-5-21
description: Array.prototype.map - the global object can be used as thisArg
includes:
    - runTestCase.js
    - fnGlobalObject.js
---*/

function testcase() {

        function callbackfn(val, idx, obj) {
            return this === fnGlobalObject();
        }

        var testResult = [11].map(callbackfn, fnGlobalObject());
        return testResult[0] === true;
    }
runTestCase(testcase);
