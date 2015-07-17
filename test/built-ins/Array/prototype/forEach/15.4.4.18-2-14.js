// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.18-2-14
description: >
    Array.prototype.forEach applied to the Array-like object that
    'length' property doesn't exist
includes: [runTestCase.js]
---*/

function testcase() {

        var accessed = false;

        function callbackfn(val, idx, obj) {
            accessed = true;
        }

        var obj = { 0: 11, 1: 12 };

        Array.prototype.forEach.call(obj, callbackfn);
        return !accessed;

    }
runTestCase(testcase);
