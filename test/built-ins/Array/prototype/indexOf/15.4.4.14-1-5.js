// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.14-1-5
description: Array.prototype.indexOf applied to number primitive
includes: [runTestCase.js]
---*/

function testcase() {
        var targetObj = {};
        try {
            Number.prototype[1] = targetObj;
            Number.prototype.length = 2;

            return Array.prototype.indexOf.call(5, targetObj) === 1;
        } finally {
            delete Number.prototype[1];
            delete Number.prototype.length;
        }
    }
runTestCase(testcase);
