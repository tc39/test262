// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.18-4-12
description: Array.prototype.forEach - 'callbackfn' is a function
includes: [runTestCase.js]
---*/

function testcase() {

        var accessed = false;
        function callbackfn(val, idx, obj) {
            accessed = true;
        }

        [11, 9].forEach(callbackfn);
        return accessed;
    }
runTestCase(testcase);
