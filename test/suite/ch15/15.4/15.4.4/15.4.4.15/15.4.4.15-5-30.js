// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
es5id: 15.4.4.15-5-30
description: >
    Array.prototype.lastIndexOf - side effects produced by step 3 are
    visible when an exception occurs
includes: [runTestCase.js]
---*/

function testcase() {

        var stepFiveOccurs = false;

        var obj = {};
        Object.defineProperty(obj, "length", {
            get: function () {
                return {
                    valueOf: function () {
                        throw new TypeError();
                    }
                };
            },
            configurable: true
        });

        var fromIndex = {
            valueOf: function () {
                stepFiveOccurs = true;
                return 0;
            }
        };

        try {
            Array.prototype.lastIndexOf.call(obj, undefined, fromIndex);
            return false;
        } catch (e) {
            return (e instanceof TypeError) && !stepFiveOccurs;
        }
    }
runTestCase(testcase);
