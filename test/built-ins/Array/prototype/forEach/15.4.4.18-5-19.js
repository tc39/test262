// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.18-5-19
description: >
    Array.prototype.forEach - the Arguments object can be used as
    thisArg
includes: [runTestCase.js]
---*/

function testcase() {

        var result = false;
        var arg;

        function callbackfn(val, idx, obj) {
            result = (this === arg);
        }

        (function fun() {
            arg = arguments;
        }(1, 2, 3));

        [11].forEach(callbackfn, arg);
        return result;
    }
runTestCase(testcase);
