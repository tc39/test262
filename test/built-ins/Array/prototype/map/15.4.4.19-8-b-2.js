// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
es5id: 15.4.4.19-8-b-2
description: Array.prototype.map - added properties in step 2 are visible here
includes: [runTestCase.js]
---*/

function testcase() {
        function callbackfn(val, idx, obj) {
            if (idx === 2 && val === "length") {
                return false;
            } else {
                return true;
            }
        }

        var obj = {};

        Object.defineProperty(obj, "length", {
            get: function () {
                obj[2] = "length";
                return 3;
            },
            configurable: true
        });

        var testResult = Array.prototype.map.call(obj, callbackfn);
        return testResult[2] === false;
    }
runTestCase(testcase);
