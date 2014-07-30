// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
es5id: 15.4.4.22-9-c-ii-19
description: >
    Array.prototype.reduceRight - value of 'accumulator' used for
    first iteration is the value of max index property which is not
    undefined when 'initialValue' is not present on an Array
includes: [runTestCase.js]
---*/

function testcase() {

        var arr = [11, 12, 13];
        var testResult = false;

        function callbackfn(prevVal, curVal, idx, obj) {
            if (idx === 1) {
                testResult = (prevVal === 13);
            }
            return curVal;
        }
        arr.reduceRight(callbackfn);

        return testResult;
    }
runTestCase(testcase);
