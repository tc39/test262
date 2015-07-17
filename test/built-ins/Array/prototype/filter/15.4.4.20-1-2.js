// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.20-1-2
description: Array.prototype.filter applied to null throws a TypeError
includes: [runTestCase.js]
---*/

function testcase() {
        try {
            Array.prototype.filter.call(null);
            return false;
        } catch (ex) {
            return ex instanceof TypeError;
        }
    }
runTestCase(testcase);
