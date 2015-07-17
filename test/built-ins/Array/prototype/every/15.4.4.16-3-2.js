// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.16-3-2
description: >
    Array.prototype.every on an Array-like object if 'length' is 1
    (length overridden to true(type conversion))
includes: [runTestCase.js]
---*/

function testcase() {

        function callbackfn1(val, idx, obj) {
            return val > 10;
        }

        function callbackfn2(val, idx, obj) {
            return val > 11;
        }

        var obj = { 0: 11, 1: 9, length: true };

        return Array.prototype.every.call(obj, callbackfn1) &&
            !Array.prototype.every.call(obj, callbackfn2);
    }
runTestCase(testcase);
