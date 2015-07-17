// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.20-5-7
description: Array.prototype.filter - built-in functions can be used as thisArg
includes: [runTestCase.js]
---*/

function testcase() {

        var accessed = false;

        function callbackfn(val, idx, obj) {
            accessed = true;
            return this === eval;
        }

        var newArr = [11].filter(callbackfn, eval);

        return newArr[0] === 11 && accessed;
    }
runTestCase(testcase);
