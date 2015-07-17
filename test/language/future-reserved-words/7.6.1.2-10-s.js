// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 7.6.1.2-10-s
description: >
    SyntaxError isn't thrown when 'IMPLEMENTS' occurs
includes: [runTestCase.js]
---*/

function testcase() {
        var IMPLEMENTS = 1;
        return IMPLEMENTS === 1;
    }
runTestCase(testcase);
