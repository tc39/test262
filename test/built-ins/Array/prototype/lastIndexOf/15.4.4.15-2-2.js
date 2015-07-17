// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.15-2-2
description: >
    Array.prototype.lastIndexOf - 'length' is own data property on an
    Array
includes: [runTestCase.js]
---*/

function testcase() {
        var targetObj = {};
        try {
            Array.prototype[2] = targetObj;

            return [0, targetObj].lastIndexOf(targetObj) === 1 &&
                [0, 1].lastIndexOf(targetObj) === -1;
        } finally {
            delete Array.prototype[2];
        }
    }
runTestCase(testcase);
