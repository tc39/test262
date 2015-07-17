// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.21-1-10
description: Array.prototype.reduce applied to the Math object
includes: [runTestCase.js]
---*/

function testcase() {

        function callbackfn(prevVal, curVal, idx, obj) {
            return ('[object Math]' === Object.prototype.toString.call(obj));
        }

        try {
            Math.length = 1;
            Math[0] = 1;
            return Array.prototype.reduce.call(Math, callbackfn, 1);
        } finally {
            delete Math[0];
            delete Math.length;
        }
    }
runTestCase(testcase);
