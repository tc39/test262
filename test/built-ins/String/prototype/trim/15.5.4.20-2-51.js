// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.5.4.20-2-51
description: >
    String.prototype.trim - 'this' is a Arguments Object that converts
    to a string
includes: [runTestCase.js]
---*/

function testcase() {
        var argObj = function () { return arguments; } (1, 2, true);
        return String.prototype.trim.call(argObj) === "[object Arguments]";
    }
runTestCase(testcase);
