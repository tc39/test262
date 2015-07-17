// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 8.7.2-6-s
description: >
    TypeError isn't thrown if LeftHandSide is a reference to a writable data
    property
includes: [runTestCase.js]
---*/

function testcase() {
        var _8_7_2_6 = {};
        Object.defineProperty(_8_7_2_6, "b", {
            writable: true
        });

        _8_7_2_6.b = 11;

        return _8_7_2_6.b === 11;
    }
runTestCase(testcase);
