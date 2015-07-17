// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.17-5-17
description: Array.prototype.some - the JSON object can be used as thisArg
includes: [runTestCase.js]
---*/

function testcase() {

        function callbackfn(val, idx, obj) {
            return this === JSON;
        }

        return [11].some(callbackfn, JSON);
    }
runTestCase(testcase);
