// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.22-7-11
description: Array.prototype.reduceRight - 'initialValue' is not present
includes: [runTestCase.js]
---*/

function testcase() {

        var str = "initialValue is not present";
        return str === [str].reduceRight(function () { });
    }
runTestCase(testcase);
