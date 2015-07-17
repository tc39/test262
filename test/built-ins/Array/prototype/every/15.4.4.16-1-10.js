// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.16-1-10
description: Array.prototype.every applied to the Math object
includes: [runTestCase.js]
---*/

function testcase() {
        function callbackfn(val, idx, obj) {
            return ('[object Math]' !== Object.prototype.toString.call(obj));
        }

        try {
            Math.length = 1;
            Math[0] = 1;
            return !Array.prototype.every.call(Math, callbackfn);
        } finally {
            delete Math[0];
            delete Math.length;
        }
    }
runTestCase(testcase);
