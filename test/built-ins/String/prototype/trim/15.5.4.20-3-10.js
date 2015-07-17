// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.5.4.20-3-10
description: >
    String.prototype.trim - 'S' is a string with null character
    ('\u0000')
includes: [runTestCase.js]
---*/

function testcase() {
        return "\u0000".trim() === "\u0000";
    }
runTestCase(testcase);
