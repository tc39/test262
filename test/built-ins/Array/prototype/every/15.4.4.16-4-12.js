// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.16-4-12
description: Array.prototype.every - 'callbackfn' is a function
includes: [runTestCase.js]
---*/

function testcase() {

        function callbackfn(val, idx, obj) {
            return val > 10;
        }

        return ![11, 9].every(callbackfn);
    }
runTestCase(testcase);
