// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.5.4.20-3-9
description: String.prototype.trim - 'S' is a string with null character ('\0')
includes: [runTestCase.js]
---*/

function testcase() {
            return "\0".trim() === "\0";
    }
runTestCase(testcase);
