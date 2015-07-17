// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.17-7-c-i-22
description: >
    Array.prototype.some - element to be retrieved is inherited
    accessor property without a get function on an Array
includes: [runTestCase.js]
---*/

function testcase() {

        function callbackfn(val, idx, obj) {
            if (idx === 0) {
                return typeof val === "undefined";
            }
            return false;
        }

        try {
            Object.defineProperty(Array.prototype, "0", {
                set: function () { },
                configurable: true
            });

            return [, ].some(callbackfn);
        } finally {
            delete Array.prototype[0];
        }

    }
runTestCase(testcase);
