// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.22-9-c-ii-29
description: >
    Array.prototype.reduceRight - Number Object can be used as
    accumulator
includes: [runTestCase.js]
---*/

function testcase() {

        var accessed = false;
        var objNumber = new Number();
        function callbackfn(prevVal, curVal, idx, obj) {
            accessed = true;
            return prevVal === objNumber;
        }

        var obj = { 0: 11, length: 1 };

        return Array.prototype.reduceRight.call(obj, callbackfn, objNumber) === true && accessed;
    }
runTestCase(testcase);
