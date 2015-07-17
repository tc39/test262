// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.22-1-2
description: Array.prototype.reduceRight applied to null throws a TypeError
includes: [runTestCase.js]
---*/

function testcase() {
        try {
            Array.prototype.reduceRight.call(null);
            return false;
        } catch (e) {
            return (e instanceof TypeError);
        }
    }
runTestCase(testcase);
