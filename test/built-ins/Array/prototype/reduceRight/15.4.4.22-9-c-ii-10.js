// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.22-9-c-ii-10
description: >
    Array.prototype.reduceRight - callbackfn is called with 1 formal
    parameter
includes: [runTestCase.js]
---*/

function testcase() {

        var called = 0;

        function callbackfn(prevVal) {
            called++;
            return prevVal;
        }

        return [11, 12].reduceRight(callbackfn, 100) === 100 && 2 === called;
    }
runTestCase(testcase);
