// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
es5id: 15.4.4.14-3-6
description: >
    Array.prototype.indexOf - value of 'length' is a number (value is
    positive)
includes: [runTestCase.js]
---*/

function testcase() {

        var obj = { 3: true, 4: false, length: 4 };

        return Array.prototype.indexOf.call(obj, true) === 3 &&
            Array.prototype.indexOf.call(obj, false) === -1;
    }
runTestCase(testcase);
