// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.17-5-19
description: Array.prototype.some - the Arguments object can be used as thisArg
includes: [runTestCase.js]
---*/

function testcase() {

        var arg;

        function callbackfn(val, idx, obj) {
            return this === arg;
        }

        (function fun() {
            arg = arguments;
        }(1, 2, 3));

        return [11].some(callbackfn, arg);
    }
runTestCase(testcase);
