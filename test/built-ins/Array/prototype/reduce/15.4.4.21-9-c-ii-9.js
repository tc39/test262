// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
es5id: 15.4.4.21-9-c-ii-9
description: >
    Array.prototype.reduce - callbackfn is called with 0 formal
    parameter
includes: [runTestCase.js]
---*/

function testcase() {

        var called = 0;
        function callbackfn() {
            called++;
        }

        [11, 12].reduce(callbackfn, 1);
        return 2 === called;
    }
runTestCase(testcase);
