// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
es5id: 15.4.4.20-9-c-iii-8
description: >
    Array.prototype.filter - return value of callbackfn is a nunmber
    (value is -0)
includes: [runTestCase.js]
---*/

function testcase() {

        var accessed = false;

        function callbackfn(val, idx, obj) {
            accessed = true;
            return -0;
        }

        var newArr = [11].filter(callbackfn);
        return newArr.length === 0 && accessed;
    }
runTestCase(testcase);
