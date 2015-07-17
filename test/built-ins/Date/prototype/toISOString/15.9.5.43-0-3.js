// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.9.5.43-0-3
description: Date.prototype.toISOString must exist as a function
includes: [runTestCase.js]
---*/

function testcase() {
        return typeof (Date.prototype.toISOString) === "function";
    }
runTestCase(testcase);
