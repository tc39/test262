// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
es5id: 15.4.4.20-5-27
description: >
    Array.prototype.filter - Array.isArray(arg) returns true when arg
    is the returned array
includes: [runTestCase.js]
---*/

function testcase() {

        var newArr = [11].filter(function () { });

        return Array.isArray(newArr);
    }
runTestCase(testcase);
