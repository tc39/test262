// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
es5id: 15.4.4.21-9-c-ii-19
description: >
    Array.prototype.reduce - value of 'accumulator' used for first
    iteration is the value of least index property which is not
    undefined when 'initialValue' is not present on an Array
includes: [runTestCase.js]
---*/

function testcase() {

        var called = 0;
        var result = false;
        function callbackfn(prevVal, curVal, idx, obj) {
            called++;
            if (idx === 1) {
                result = (prevVal === 11) && curVal === 9;
            }
        }

        [11, 9].reduce(callbackfn);
        return result && called === 1;
    }
runTestCase(testcase);
