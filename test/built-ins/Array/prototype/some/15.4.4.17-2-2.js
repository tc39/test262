// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.17-2-2
description: Array.prototype.some - 'length' is own data property on an Array
includes: [runTestCase.js]
---*/

function testcase() {
        function callbackfn1(val, idx, obj) {
            return val > 10;
        }

        function callbackfn2(val, idx, obj) {
            return val > 11;
        }

        try {
            Array.prototype[2] = 12;

            return [9, 11].some(callbackfn1) &&
                ![9, 11].some(callbackfn2);
        } finally {
            delete Array.prototype[2];
        }
    }
runTestCase(testcase);
