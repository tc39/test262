// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.17-5-15
description: Array.prototype.some - Date object can be used as thisArg
includes: [runTestCase.js]
---*/

function testcase() {

        var objDate = new Date();

        function callbackfn(val, idx, obj) {
            return this === objDate;
        }

        return [11].some(callbackfn, objDate);
    }
runTestCase(testcase);
