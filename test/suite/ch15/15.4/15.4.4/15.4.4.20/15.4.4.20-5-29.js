// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
es5id: 15.4.4.20-5-29
description: Array.prototype.filter - returns an array whose length is 0
includes: [runTestCase.js]
---*/

function testcase() {

        var newArr = [11].filter(function () { });

        return newArr.length === 0;
    }
runTestCase(testcase);
