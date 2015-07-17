// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.15-8-b-ii-10
description: >
    Array.prototype.lastIndexOf - both array element and search
    element are booleans, and they have same value
includes: [runTestCase.js]
---*/

function testcase() {

        return [false, true].lastIndexOf(true) === 1;
    }
runTestCase(testcase);
