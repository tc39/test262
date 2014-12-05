// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
es5id: 15.4.4.19-2-11
description: >
    Array.prototype.map - applied to Array-like object when 'length'
    is an own accessor property without a get function
includes: [runTestCase.js]
---*/

function testcase() {

        function callbackfn(val, idx, obj) {
            return val > 10;
        }

        var obj = {
            0: 11,
            1: 12
        };
        Object.defineProperty(obj, "length", {
            set: function () { },
            configurable: true
        });

        var testResult = Array.prototype.map.call(obj, callbackfn);

        return 0 === testResult.length;
    }
runTestCase(testcase);
