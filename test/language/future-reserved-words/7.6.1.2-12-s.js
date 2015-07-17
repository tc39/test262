// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 7.6.1.2-12-s
description: >
    SyntaxError isn't thrown when 'implement' occurs
includes: [runTestCase.js]
---*/

function testcase() {
        var implement = 1;
        return implement === 1;
    }
runTestCase(testcase);
