// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.6-1-2
description: Object.defineProperty applied to null throws a TypeError
includes: [runTestCase.js]
---*/

function testcase() {
        try {
            Object.defineProperty(null, "foo", {});
            return false;
        } catch (e) {
            return e instanceof TypeError;
        }
    }
runTestCase(testcase);
