// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.9.5.43-0-7
description: >
    Date.prototype.toISOString - TypeError is thrown when this is any
    primitive values
includes: [runTestCase.js]
---*/

function testcase() {

        try {
            Date.prototype.toISOString.call(15);
            return false;
        } catch (ex) {
            return ex instanceof TypeError;
        }
    }
runTestCase(testcase);
