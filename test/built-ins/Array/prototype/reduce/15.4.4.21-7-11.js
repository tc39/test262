// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.21-7-11
description: Array.prototype.reduce - 'initialValue' is not present
includes: [runTestCase.js]
---*/

function testcase() {

        var str = "initialValue is not present";
        return str === [str].reduce(function () { });
    }
runTestCase(testcase);
