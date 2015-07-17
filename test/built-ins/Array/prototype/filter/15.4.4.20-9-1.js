// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.20-9-1
description: >
    Array.prototype.filter doesn't consider new elements added to
    array after it is called
includes: [runTestCase.js]
---*/

function testcase() {

        function callbackfn(val, idx, obj) {
            srcArr[2] = 3;
            srcArr[5] = 6;
            return true;
        }

        var srcArr = [1, 2, , 4, 5];
        var resArr = srcArr.filter(callbackfn);
        return resArr.length === 5;

    }
runTestCase(testcase);
