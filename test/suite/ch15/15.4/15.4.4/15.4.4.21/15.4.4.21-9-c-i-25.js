// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
es5id: 15.4.4.21-9-c-i-25
description: >
    Array.prototype.reduce - This object is the Arguments object which
    implements its own property get method (number of arguments is
    less than number of parameters)
includes: [runTestCase.js]
---*/

function testcase() {

        var testResult = false;
        var initialValue = 0;
        function callbackfn(prevVal, curVal, idx, obj) {
            if (idx === 1) {
                testResult = (curVal === 1);
            }
        }

        var func = function (a, b, c) {
            Array.prototype.reduce.call(arguments, callbackfn, initialValue);
        };

        func(0, 1);
        return testResult;
    }
runTestCase(testcase);
