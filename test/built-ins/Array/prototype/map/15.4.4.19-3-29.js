// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.19-3-29
description: >
    Array.prototype.map - value of 'length' is boundary value (2^32 +
    1)
includes: [runTestCase.js]
---*/

function testcase() {

        function callbackfn(val, idx, obj) {
            return val > 10;
        }

        var obj = {
            0: 11,
            1: 9,
            length: 4294967297
        };

        try {
            var newArr = Array.prototype.map.call(obj, callbackfn);
        } catch (e) {
            if (e instanceof RangeError) {
                return true;
            }
        }
    }
runTestCase(testcase);
