// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 7.6.1.2-14-s
description: >
    SyntaxError isn't thrown when 'implements0' occurs
includes: [runTestCase.js]
---*/

function testcase() {
        var implements0 = 1;
        return implements0 === 1;
    }
runTestCase(testcase);
