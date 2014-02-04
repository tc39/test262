// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
es5id: 15.4.4.14-3-7
description: >
    Array.prototype.indexOf - value of 'length' is a number (value is
    negative)
includes: [runTestCase.js]
---*/

function testcase() {

        var obj = { 4: true, 5: false, length: 5 - Math.pow(2, 32) };

        return Array.prototype.indexOf.call(obj, true) === -1 &&
            Array.prototype.indexOf.call(obj, false) === -1;
    }
runTestCase(testcase);
