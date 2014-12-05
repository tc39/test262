// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
es5id: 15.4.4.16-7-c-ii-9
description: >
    Array.prototype.every - callbackfn is called with 0 formal
    parameter
includes: [runTestCase.js]
---*/

function testcase() {

        var called = 0;

        function callbackfn() {
            called++;
            return true;
        }

        return [11, 12].every(callbackfn) && 2 === called;
    }
runTestCase(testcase);
