// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.16-5-10
description: Array.prototype.every - Array Object can be used as thisArg
includes: [runTestCase.js]
---*/

function testcase() {

        var accessed = false;
        var objArray = [];

        function callbackfn(val, idx, obj) {
            accessed = true;
            return this === objArray;
        }



        return [11].every(callbackfn, objArray) && accessed;
    }
runTestCase(testcase);
