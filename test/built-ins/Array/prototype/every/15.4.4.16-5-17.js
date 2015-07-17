// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.16-5-17
description: Array.prototype.every - the JSON object can be used as thisArg
includes: [runTestCase.js]
---*/

function testcase() {
        var accessed = false;

        function callbackfn(val, idx, obj) {
            accessed = true;
            return this === JSON;
        }

        return [11].every(callbackfn, JSON) && accessed;
    }
runTestCase(testcase);
