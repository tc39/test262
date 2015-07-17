// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.14-1-3
description: Array.prototype.indexOf applied to boolean primitive
includes: [runTestCase.js]
---*/

function testcase() {
        var targetObj = {};
        try {
            Boolean.prototype[1] = targetObj;
            Boolean.prototype.length = 2;

            return Array.prototype.indexOf.call(true, targetObj) === 1;
        } finally {
            delete Boolean.prototype[1];
            delete Boolean.prototype.length;
        }
    }
runTestCase(testcase);
