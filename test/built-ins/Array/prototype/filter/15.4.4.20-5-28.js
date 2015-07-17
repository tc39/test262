// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.20-5-28
description: Array.prototype.filter - the returned array is instanceof Array
includes: [runTestCase.js]
---*/

function testcase() {

        var newArr = [11].filter(function () { });

        return newArr instanceof Array;
    }
runTestCase(testcase);
