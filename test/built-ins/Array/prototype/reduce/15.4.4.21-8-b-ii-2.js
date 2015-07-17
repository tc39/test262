// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.21-8-b-ii-2
description: >
    Array.prototype.reduce - deleted properties in step 2 are visible
    here
includes: [runTestCase.js]
---*/

function testcase() {

        var obj = { 1: "accumulator", 2: "another" };

        Object.defineProperty(obj, "length", {
            get: function () {
                delete obj[1];
                return 3;
            },
            configurable: true
        });

        return "accumulator" !== Array.prototype.reduce.call(obj, function () { });
    }
runTestCase(testcase);
