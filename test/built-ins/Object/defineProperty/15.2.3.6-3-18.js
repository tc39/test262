// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.6-3-18
description: >
    Object.defineProperty - 'Attributes' is a number primitive (8.10.5
    step 1)
includes: [runTestCase.js]
---*/

function testcase() {

        try {
            Object.defineProperty({}, "property", 12);
            return false;
        } catch (e) {
            return e instanceof TypeError;
        }
    }
runTestCase(testcase);
