// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.18-5-10
description: Array.prototype.forEach - Array Object can be used as thisArg
includes: [runTestCase.js]
---*/

function testcase() {

        var result = false;
        var objArray = [];

        function callbackfn(val, idx, obj) {
            result = (this === objArray);
        }

        [11].forEach(callbackfn, objArray);
        return result;
    }
runTestCase(testcase);
