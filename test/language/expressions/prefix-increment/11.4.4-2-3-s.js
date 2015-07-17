// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 11.4.4-2-3-s
description: SyntaxError is not thrown for ++arguments[...]
includes: [runTestCase.js]
---*/

function testcase() {
        arguments[1] = 7;
        ++arguments[1];
        return arguments[1]===8;
    }
runTestCase(testcase);
