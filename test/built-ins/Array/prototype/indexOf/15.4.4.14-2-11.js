// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.14-2-11
description: >
    Array.prototype.indexOf - 'length' is own accessor property
    without a get function
includes: [runTestCase.js]
---*/

function testcase() {

        var obj = { 1: true };
        Object.defineProperty(obj, "length", {
            set: function () { },
            configurable: true
        });

        return Array.prototype.indexOf.call(obj, true) === -1;
    }
runTestCase(testcase);
