// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.17-5-18
description: Array.prototype.some - Error object can be used as thisArg
includes: [runTestCase.js]
---*/

function testcase() {

        var objError = new RangeError();

        function callbackfn(val, idx, obj) {
            return this === objError;
        }

        return [11].some(callbackfn, objError);
    }
runTestCase(testcase);
