// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

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
