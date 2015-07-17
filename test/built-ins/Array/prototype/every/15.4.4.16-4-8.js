// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.16-4-8
description: >
    Array.prototype.every - side effects produced by step 2 are
    visible when an exception occurs
includes: [runTestCase.js]
---*/

function testcase() {

        var obj = { 0: 11, 1: 12 };

        var accessed = false;

        Object.defineProperty(obj, "length", {
            get: function () {
                accessed = true;
                return 2;
            },
            configurable: true
        });

        try {
            Array.prototype.every.call(obj, null);
            return false;
        } catch (ex) {
            return ex instanceof TypeError && accessed;
        }
    }
runTestCase(testcase);
