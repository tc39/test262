// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.20-4-12
description: Array.prototype.filter - 'callbackfn' is a function
includes: [runTestCase.js]
---*/

function testcase() {

        function callbackfn(val, idx, obj) {
            if (idx === 1) {
                return val === 9;
            }
            return false;
        }

        var newArr = [11, 9].filter(callbackfn);
        return newArr.length === 1 && newArr[0] === 9;
    }
runTestCase(testcase);
