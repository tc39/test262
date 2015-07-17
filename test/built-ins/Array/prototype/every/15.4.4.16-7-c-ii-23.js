// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.16-7-c-ii-23
description: >
    Array.prototype.every - callbackfn called with correct parameters
    (this object O is correct)
includes: [runTestCase.js]
---*/

function testcase() {

        var called = 0;
        var obj = { 0: 11, 1: 12, length: 2 };

        function callbackfn(val, idx, o) {
            called++;
            return obj === o;
        }

        return Array.prototype.every.call(obj, callbackfn) && 2 === called;
    }
runTestCase(testcase);
