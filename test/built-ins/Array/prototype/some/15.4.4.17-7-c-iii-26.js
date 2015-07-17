// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.17-7-c-iii-26
description: >
    Array.prototype.some - return value of callbackfn is the global
    object
includes:
    - runTestCase.js
    - fnGlobalObject.js
---*/

function testcase() {

        function callbackfn(val, idx, obj) {
            return fnGlobalObject();
        }

        return [11].some(callbackfn);
    }
runTestCase(testcase);
