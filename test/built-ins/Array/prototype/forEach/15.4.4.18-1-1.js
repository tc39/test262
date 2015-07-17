// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.18-1-1
description: Array.prototype.forEach applied to undefined
includes: [runTestCase.js]
---*/

function testcase() {
        try {
            Array.prototype.forEach.call(undefined); // TypeError is thrown if value is undefined
            return false;
        } catch (e) {
            return (e instanceof TypeError);
        }
    }
runTestCase(testcase);
