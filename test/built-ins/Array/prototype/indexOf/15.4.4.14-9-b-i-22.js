// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.14-9-b-i-22
description: >
    Array.prototype.indexOf - element to be retrieved is inherited
    accessor property without a get function on an Array-like object
includes: [runTestCase.js]
---*/

function testcase() {

        try {
            Object.defineProperty(Object.prototype, "0", {
                set: function () { },
                configurable: true
            });
            return 0 === Array.prototype.indexOf.call({ length: 1 }, undefined);
        } finally {
            delete Object.prototype[0];
        }
    }
runTestCase(testcase);
