// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.5.4.20-2-29
description: >
    String.prototype.trim - argument 'this' is a string(value is 'AB
    \cd')
includes: [runTestCase.js]
---*/

function testcase() {
        return String.prototype.trim.call("AB\n\\cd") === "AB\n\\cd";
    }
runTestCase(testcase);
