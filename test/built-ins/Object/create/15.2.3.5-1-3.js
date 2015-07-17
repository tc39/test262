// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.5-1-3
description: Object.create throws TypeError if 'O' is a boolean primitive
includes: [runTestCase.js]
---*/

function testcase() {

        try {
            Object.create(true);
            return false;
        } catch (e) {
            return (e instanceof TypeError);
        }
    }
runTestCase(testcase);
