// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.14-9-b-i-3
description: >
    Array.prototype.indexOf - element to be retrieved is own data
    property that overrides an inherited data property on an Array
includes: [runTestCase.js]
---*/

function testcase() {
        try {
            Array.prototype[0] = false;
            return [true].indexOf(true) === 0;
        } finally {
            delete Array.prototype[0];
        }
    }
runTestCase(testcase);
