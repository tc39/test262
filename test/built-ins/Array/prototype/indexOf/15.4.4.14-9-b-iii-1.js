// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.14-9-b-iii-1
description: >
    Array.prototype.indexOf - returns index of last one when more than
    two elements in array are eligible
includes: [runTestCase.js]
---*/

function testcase() {

        return [1, 2, 2, 1, 2].indexOf(2) === 1;
    }
runTestCase(testcase);
