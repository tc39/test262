// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.5.4.20-3-13
description: >
    String.prototype.trim - 'S' is a string that starts with null
    character and ends with null character
includes: [runTestCase.js]
---*/

function testcase() {
        return "\0\u0000abc\0\u0000".trim() === "\0\u0000abc\0\u0000";
    }
runTestCase(testcase);
