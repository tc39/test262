// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.21-8-b-ii-1
description: >
    Array.prototype.reduce - added properties in step 2 are visible
    here
includes: [runTestCase.js]
---*/

function testcase() {

        var obj = { };

        Object.defineProperty(obj, "length", {
            get: function () {
                obj[1] = "accumulator";
                return 3;
            },
            configurable: true
        });

        return Array.prototype.reduce.call(obj, function () { }) === "accumulator";
    }
runTestCase(testcase);
