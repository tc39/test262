// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.17-7-c-iii-22
description: >
    Array.prototype.some - return value of callbackfn is a RegExp
    object
includes: [runTestCase.js]
---*/

function testcase() {

        function callbackfn(val, idx, obj) {
            return new RegExp();
        }

        return [11].some(callbackfn);
    }
runTestCase(testcase);
