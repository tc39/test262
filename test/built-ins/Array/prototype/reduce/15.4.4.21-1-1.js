// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.21-1-1
description: Array.prototype.reduce applied to undefined
includes: [runTestCase.js]
---*/

function testcase() {
        try {
            Array.prototype.reduce.call(undefined); 
            return false;
        } catch (e) {
            return (e instanceof TypeError);
        }
    }
runTestCase(testcase);
