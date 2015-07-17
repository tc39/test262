// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.19-8-c-i-8
description: >
    Array.prototype.map - element to be retrieved is inherited data
    property on an Array
includes: [runTestCase.js]
---*/

function testcase() {
        function callbackfn(val, idx, obj) {
            if (idx === 1) {
                return val === 13;
            }
            return false;
        }

        try {
            Array.prototype[1] = 13;

            var newArr = [, , , ].map(callbackfn);

            return newArr[1] === true;
        } finally {
            delete Array.prototype[1];
        }
    }
runTestCase(testcase);
