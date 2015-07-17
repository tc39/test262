// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.12-1-6
description: Object.isFrozen applies to sparse array
includes: [runTestCase.js]
---*/

function testcase() {
        var sparseArr = [0, 1];
        sparseArr[10000] = 10000;

        sparseArr = Object.freeze(sparseArr);
        return Object.isFrozen(sparseArr);
    }
runTestCase(testcase);
