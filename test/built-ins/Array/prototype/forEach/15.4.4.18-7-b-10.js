// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
es5id: 15.4.4.18-7-b-10
description: >
    Array.prototype.forEach - deleting property of prototype causes
    prototype index property not to be visited on an Array-like Object
includes: [runTestCase.js]
---*/

function testcase() {

        var accessed = false;
        var testResult = true;

        function callbackfn(val, idx, obj) {
            accessed = true;
            if (idx === 3) {
                testResult = false;
            }
        }

        var obj = { 2: 2, length: 20 };

        Object.defineProperty(obj, "0", {
            get: function () {
                delete Object.prototype[1];
                return 0;
            },
            configurable: true
        });

        try {
            Object.prototype[1] = 1;
            Array.prototype.forEach.call(obj, callbackfn);
            return testResult && accessed;
        } finally {
            delete Object.prototype[1];
        }
    }
runTestCase(testcase);
