// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.17-1-5
description: Array.prototype.some applied to number primitive
includes: [runTestCase.js]
---*/

function testcase() {
        function callbackfn(val, idx, obj) {
            return obj instanceof Number;
        }

        try {
            Number.prototype[1] = true;
            Number.prototype.length = 2;

            return Array.prototype.some.call(5, callbackfn);
        } finally {
            delete Number.prototype[1];
            delete Number.prototype.length;
        }
    }
runTestCase(testcase);
