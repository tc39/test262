// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 11.13.2-6-s
description: >
    Strict Mode - ReferenceError is thrown if the
    LeftHandSideExpression of a Compound Assignment operator(<<=)
    evaluates to an unresolvable reference
includes: [runTestCase.js]
---*/

function testcase() {
        try {
            eval("_11_13_2_6 <<= 1;");
            return false;
        } catch (e) {
            return e instanceof ReferenceError;
        }
    }
runTestCase(testcase);
