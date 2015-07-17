// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.6-1-3
description: >
    Object.defineProperty applied to number primitive throws a
    TypeError
includes: [runTestCase.js]
---*/

function testcase() {
        try {
            Object.defineProperty(5, "foo", {});
            return false;
        } catch (e) {
            return e instanceof TypeError;
        }
    }
runTestCase(testcase);
