// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.3.2-1-13
description: Array.isArray applied to Arguments object
includes: [runTestCase.js]
---*/

function testcase() {

        var arg;

        (function fun() {
            arg = arguments;
        }(1, 2, 3));

        return !Array.isArray(arg);
    }
runTestCase(testcase);
