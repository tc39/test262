// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.22-9-c-ii-28
description: >
    Array.prototype.reduceRight - Boolean Object can be used as
    accumulator
includes: [runTestCase.js]
---*/

function testcase() {

        var accessed = false;
        var objBoolean = new Boolean();
        function callbackfn(prevVal, curVal, idx, obj) {
            accessed = true;
            return prevVal === objBoolean;
        }

        var obj = { 0: 11, length: 1 };

        return Array.prototype.reduceRight.call(obj, callbackfn, objBoolean) === true && accessed;
    }
runTestCase(testcase);
