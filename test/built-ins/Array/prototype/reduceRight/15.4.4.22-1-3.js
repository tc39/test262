// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.22-1-3
description: Array.prototype.reduceRight applied to boolean primitive
includes: [runTestCase.js]
---*/

function testcase() {

        var accessed = false;

        function callbackfn(prevVal, curVal, idx, obj) {
            accessed = true;
            return obj instanceof Boolean;
        }

        try {
            Boolean.prototype[0] = 1;
            Boolean.prototype.length = 1;
            return Array.prototype.reduceRight.call(false, callbackfn, 1) && accessed;
        } finally {
            delete Boolean.prototype[0];
            delete Boolean.prototype.length;
        }
    }
runTestCase(testcase);
