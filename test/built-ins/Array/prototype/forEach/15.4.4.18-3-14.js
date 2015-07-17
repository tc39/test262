// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.18-3-14
description: Array.prototype.forEach - 'length' is a string containing -Infinity
includes: [runTestCase.js]
---*/

function testcase() {

        var accessed2 = false;

        function callbackfn2(val, idx, obj) {
            accessed2 = true;
        }

        var obj2 = { 0: 9, length: "-Infinity" };

        Array.prototype.forEach.call(obj2, callbackfn2);

        return !accessed2;
    }
runTestCase(testcase);
