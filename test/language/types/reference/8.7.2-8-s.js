// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 8.7.2-8-s
description: >
    TypeError isn't thrown if LeftHandSide is a reference to a property of an
    extensible object
includes: [runTestCase.js]
---*/

function testcase() {
        var _8_7_2_8 = {};

        _8_7_2_8.b = 11;

        return _8_7_2_8.b === 11;
    }
runTestCase(testcase);
