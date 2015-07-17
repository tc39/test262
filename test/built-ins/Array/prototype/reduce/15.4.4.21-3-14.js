// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.21-3-14
description: Array.prototype.reduce - 'length' is a string containing -Infinity
includes: [runTestCase.js]
---*/

function testcase() {

        var accessed2 = false;

        function callbackfn2(prevVal, curVal, idx, obj) {
            accessed2 = true;
            return 2;
        }

        var obj2 = { 0: 9, length: "-Infinity" };

        return Array.prototype.reduce.call(obj2, callbackfn2, 1) === 1
            && !accessed2;
    }
runTestCase(testcase);
