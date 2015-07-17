// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.5.4.20-2-32
description: >
    String.prototype.trim - argument 'this' is a string(value is
    '123#$%abc')
includes: [runTestCase.js]
---*/

function testcase() {
        return String.prototype.trim.call("123#$%abc") === "123#$%abc";
    }
runTestCase(testcase);
