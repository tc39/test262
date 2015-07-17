// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.9.5.43-0-15
description: >
    Date.prototype.toISOString - value of year is Infinity
    Date.prototype.toISOString throw the RangeError
includes: [runTestCase.js]
---*/

function testcase() {
        var date = new Date(Infinity, 1, 70, 0, 0, 0);

        try {
            date.toISOString();
        } catch (ex) {
            return ex instanceof RangeError;
        }
    }
runTestCase(testcase);
