// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.18-5-15
description: Array.prototype.forEach - Date Object can be used as thisArg
includes: [runTestCase.js]
---*/

function testcase() {

        var result = false;
        var objDate = new Date();

        function callbackfn(val, idx, obj) {
            result = (this === objDate);
        }

        [11].forEach(callbackfn, objDate);
        return result;
    }
runTestCase(testcase);
