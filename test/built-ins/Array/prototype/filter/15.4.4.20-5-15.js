// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.20-5-15
description: Array.prototype.filter - Date Object can be used as thisArg
includes: [runTestCase.js]
---*/

function testcase() {

        var accessed = false;

        var objDate = new Date();

        function callbackfn(val, idx, obj) {
            accessed = true;
            return this === objDate;
        }

        var newArr = [11].filter(callbackfn, objDate);

        return newArr[0] === 11 && accessed;
    }
runTestCase(testcase);
