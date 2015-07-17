// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.14-1-13
description: Array.prototype.indexOf applied to the JSON object
includes: [runTestCase.js]
---*/

function testcase() {
        var targetObj = {};
        try {
            JSON[3] = targetObj;
            JSON.length = 5;
            return Array.prototype.indexOf.call(JSON, targetObj) === 3;
        } finally {
            delete JSON[3];
            delete JSON.length;
        }
    }
runTestCase(testcase);
