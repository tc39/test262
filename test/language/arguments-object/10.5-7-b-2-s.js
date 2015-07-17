// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 10.5-7-b-2-s
description: Arguments object index assignment is allowed
includes: [runTestCase.js]
---*/

function testcase() {
        function _10_5_7_b_2_fun() {
            arguments[7] = 12;
            return arguments[7] === 12;
        };

        return _10_5_7_b_2_fun(30);
    }
runTestCase(testcase);
