// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.15-1-10
description: Array.prototype.lastIndexOf applied to the Math object
includes: [runTestCase.js]
---*/

function testcase() {
    
        try {
            Math.length = 2;
            Math[1] = 100;
            return 1 === Array.prototype.lastIndexOf.call(Math, 100);
        } finally {
            delete Math.length;
            delete Math[1];
        }
    }
runTestCase(testcase);
