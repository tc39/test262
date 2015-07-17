// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 8.7.2-2-s
description: >
    ReferenceError isn't thrown if LeftHandSide evaluates to a resolvable
    Reference
includes: [runTestCase.js]
---*/

function testcase() {
        var b = 11;
        return b === 11;
    }
runTestCase(testcase);
