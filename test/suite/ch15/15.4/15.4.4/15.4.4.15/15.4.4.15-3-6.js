// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
es5id: 15.4.4.15-3-6
description: >
    Array.prototype.lastIndexOf - value of 'length' is a number (value
    is a positive number)
includes: [runTestCase.js]
---*/

function testcase() {

        var obj = { 99: true, 100: 100, length: 100 };

        return Array.prototype.lastIndexOf.call(obj, true) === 99 &&
            Array.prototype.lastIndexOf.call(obj, 100) === -1;
    }
runTestCase(testcase);
