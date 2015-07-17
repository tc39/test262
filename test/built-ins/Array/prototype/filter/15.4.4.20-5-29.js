// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.20-5-29
description: Array.prototype.filter - returns an array whose length is 0
includes: [runTestCase.js]
---*/

function testcase() {

        var newArr = [11].filter(function () { });

        return newArr.length === 0;
    }
runTestCase(testcase);
