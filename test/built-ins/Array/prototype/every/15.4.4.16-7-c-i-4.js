// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.16-7-c-i-4
description: >
    Array.prototype.every - element to be retrieved is own data
    property that overrides an inherited data property on an Array
includes: [runTestCase.js]
---*/

function testcase() {
        var called = 0;
        function callbackfn(val, idx, obj) {
            called++;
            return val === 12;
        }

        try {
            Array.prototype[0] = 11;
            Array.prototype[1] = 11;

            return [12, 12].every(callbackfn) && called === 2;
        } finally {
            delete Array.prototype[0];
            delete Array.prototype[1];
        }
    }
runTestCase(testcase);
