// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.16-5-15
description: Array.prototype.every - Date Object can be used as thisArg
includes: [runTestCase.js]
---*/

function testcase() {

        var accessed = false;
        var objDate = new Date();

        function callbackfn(val, idx, obj) {
            accessed = true;
            return this === objDate;
        }

        return [11].every(callbackfn, objDate) && accessed;
    }
runTestCase(testcase);
