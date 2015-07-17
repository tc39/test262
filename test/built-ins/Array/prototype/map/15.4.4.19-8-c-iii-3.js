// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.19-8-c-iii-3
description: >
    Array.prototype.map - value of returned array element can be
    overwritten
includes: [runTestCase.js]
---*/

function testcase() {

        function callbackfn(val, idx, obj) {
            return 11;
        }

        var obj = { 0: 11, 1: 9, length: 2 };
        var newArr = Array.prototype.map.call(obj, callbackfn);

        try {
            var tempVal = newArr[1];
            newArr[1] += 1;
            return newArr[1] !== tempVal;
        } catch (ex) {
            return false;
        }
    }
runTestCase(testcase);
