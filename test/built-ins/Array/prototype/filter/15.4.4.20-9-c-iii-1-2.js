// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.20-9-c-iii-1-2
description: >
    Array.prototype.filter - value of returned array element can be
    overwritten
includes: [runTestCase.js]
---*/

function testcase() {

        function callbackfn(val, idx, obj) {
            return true;
        }

        var obj = { 0: 11, 1: 9, length: 2 };
        var newArr = Array.prototype.filter.call(obj, callbackfn);

        try {
            var tempVal = newArr[1];
            newArr[1] += 1;
            return newArr[1] !== tempVal;
        } catch (ex) {
            return false;
        }
    }
runTestCase(testcase);
