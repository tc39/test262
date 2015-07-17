// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.5.4.20-2-17
description: >
    String.prototype.trim - argument 'this' is a number that converts
    to string (value is 1e+22)
includes: [runTestCase.js]
---*/

function testcase() {
        return String.prototype.trim.call(1e+22) === "1e+22";
    }
runTestCase(testcase);
