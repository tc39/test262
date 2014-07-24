// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
es5id: 15.4.4.14-2-14
description: Array.prototype.indexOf - 'length' is undefined property
includes: [runTestCase.js]
---*/

function testcase() {

        var obj = { 0: true, 1: true };

        return Array.prototype.indexOf.call(obj, true) === -1;
    }
runTestCase(testcase);
