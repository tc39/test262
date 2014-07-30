// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
es5id: 15.4.4.21-8-c-6
description: >
    Array.prototype.reduce - if exception occurs, it occurs after any
    side-effects that might be produced by step 3
includes: [runTestCase.js]
---*/

function testcase() {

        var obj = {};

        var accessed = false;

        Object.defineProperty(obj, "length", {
            get: function () {
                return {
                    toString: function () {
                        accessed = true;
                        return "2";
                    }
                };
            },
            configurable: true
        });

        try {
            Array.prototype.reduce.call(obj, function () { });
            return false;
        } catch (ex) {
            return (ex instanceof TypeError) && accessed;
        }
    }
runTestCase(testcase);
