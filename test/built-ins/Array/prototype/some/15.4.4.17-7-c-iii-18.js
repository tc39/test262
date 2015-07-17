// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.17-7-c-iii-18
description: >
    Array.prototype.some - return value of callbackfn is a Boolean
    object
includes: [runTestCase.js]
---*/

function testcase() {

        function callbackfn(val, idx, obj) {
            return new Boolean();
        }

        return [11].some(callbackfn);
    }
runTestCase(testcase);
