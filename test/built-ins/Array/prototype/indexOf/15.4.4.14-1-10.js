// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.14-1-10
description: Array.prototype.indexOf applied to the Math object
includes: [runTestCase.js]
---*/

function testcase() {
        try {
            Math[1] = true;
            Math.length = 2;
            return Array.prototype.indexOf.call(Math, true) === 1;
        } finally {
            delete Math[1];
            delete Math.length;
        }
    }
runTestCase(testcase);
