// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.16-7-c-i-8
description: >
    Array.prototype.every - element to be retrieved is inherited data
    property on an Array
includes: [runTestCase.js]
---*/

function testcase() {

        function callbackfn(val, idx, obj) {
            if (idx === 1) {
                return val !== 13;
            } else {
                return true;
            }
        }

        try {
            Array.prototype[1] = 13;
            return ![, , , ].every(callbackfn);
        } finally {
            delete Array.prototype[1];
        }
    }
runTestCase(testcase);
