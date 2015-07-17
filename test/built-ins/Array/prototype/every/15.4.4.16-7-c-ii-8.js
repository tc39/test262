// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.16-7-c-ii-8
description: >
    Array.prototype.every - element changed by callbackfn on previous
    iterations is observed
includes: [runTestCase.js]
---*/

function testcase() {

        var obj = { 0: 11, 1: 12, length: 2 };

        function callbackfn(val, idx, o) {
            if (idx === 0) {
                obj[idx + 1] = 8;
            }
            return val > 10;
        }

       

        return !Array.prototype.every.call(obj, callbackfn);
    }
runTestCase(testcase);
