// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.20-5-22
description: Array.prototype.filter - boolean primitive can be used as thisArg
includes: [runTestCase.js]
---*/

function testcase() {

        var accessed = false;

        function callbackfn(val, idx, obj) {
            accessed = true;
            return this.valueOf() === false;
        }

        var newArr = [11].filter(callbackfn, false);

        return newArr[0] === 11 && accessed;
    }
runTestCase(testcase);
