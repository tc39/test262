// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
es5id: 15.4.4.20-2-14
description: >
    Array.prototype.filter applied to the Array-like object that
    'length property doesn't exist
includes: [runTestCase.js]
---*/

function testcase() {

        var accessed = false;
        function callbackfn(val, idx, obj) {
            accessed = true;
            return true;
        }

        var obj = { 0: 11, 1: 12 };

        var newArr = Array.prototype.filter.call(obj, callbackfn);
        return newArr.length === 0 && !accessed;
    }
runTestCase(testcase);
