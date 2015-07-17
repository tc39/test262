// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.22-2-2
description: >
    Array.prototype.reduceRight - 'length' is own data property on an
    Array
includes: [runTestCase.js]
---*/

function testcase() {

        var accessed = false;

        function callbackfn(prevVal, curVal, idx, obj) {
            accessed = true;
            return obj.length === 2;
        }

        return [12, 11].reduceRight(callbackfn, 11) && accessed;
    }
runTestCase(testcase);
