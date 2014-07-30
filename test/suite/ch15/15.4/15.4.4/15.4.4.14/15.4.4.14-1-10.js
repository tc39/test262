// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

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
