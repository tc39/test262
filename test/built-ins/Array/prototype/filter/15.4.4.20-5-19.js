// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.20-5-19
description: >
    Array.prototype.filter - the Arguments object can be used as
    thisArg
includes: [runTestCase.js]
---*/

function testcase() {

        var accessed = false;
        var arg;

        function callbackfn(val, idx, obj) {
            accessed = true;
            return this === arg;
        }

        (function fun() {
            arg = arguments;
        }(1, 2, 3));

        var newArr = [11].filter(callbackfn, arg);
        return newArr[0] === 11 && accessed;
    }
runTestCase(testcase);
