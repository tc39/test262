// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
es5id: 15.4.4.17-7-b-2
description: Array.prototype.some - added properties in step 2 are visible here
includes: [runTestCase.js]
---*/

function testcase() {
        function callbackfn(val, idx, obj) {
            if (idx === 2 && val === "length") {
                return true;
            } else {
                return false;
            }
        }
        
        var arr = { };

        Object.defineProperty(arr, "length", {
            get: function () {
                arr[2] = "length";
                return 3;
            },
            configurable: true
        });

        return Array.prototype.some.call(arr, callbackfn);
    }
runTestCase(testcase);
