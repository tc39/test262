// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.15-8-a-9
description: >
    Array.prototype.lastIndexOf -  properties can be added to
    prototype after current position are visited on an Array-like
    object
includes: [runTestCase.js]
---*/

function testcase() {

        var arr = { length: 9 };

        Object.defineProperty(arr, "4", {
            get: function () {
                Object.defineProperty(Object.prototype, "1", {
                    get: function () {
                        return Infinity;
                    },
                    configurable: true
                });
                return 0;
            },
            configurable: true
        });

        try {
            return Array.prototype.lastIndexOf.call(arr, Infinity) === 1;
        } finally {
            delete Object.prototype[1];
        }
    }
runTestCase(testcase);
