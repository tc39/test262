// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.5.4.20-2-46
description: >
    String.prototype.trim - 'this' is a Function Object that converts
    to a string
includes: [runTestCase.js]
---*/

function testcase() {
        var funObj = function () { return arguments; };
        return typeof(String.prototype.trim.call(funObj)) === "string";
    }
runTestCase(testcase);
