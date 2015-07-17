// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 11.13.2-13-s
description: >
    ReferenceError isn't thrown if the LeftHandSideExpression of a Compound
    Assignment operator(/=) evaluates to a resolvable reference
includes: [runTestCase.js]
---*/

function testcase() {
        var _11_13_2_13 = 6
        _11_13_2_13 /= 2;
        return _11_13_2_13 === 3;
    }
runTestCase(testcase);
