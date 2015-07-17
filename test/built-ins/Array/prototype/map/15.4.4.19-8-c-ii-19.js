// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.19-8-c-ii-19
description: Array.prototype.map - non-indexed properties are not called.
includes: [runTestCase.js]
---*/

function testcase() {

        var called = 0;
        var result = false;

        function callbackfn(val, idx, obj) {
            called++;
            if (val === 11) {
                result = true;
            }
            return true;
        }

        var obj = { 0: 9, non_index_property: 11, length: 20 };

        var testResult = Array.prototype.map.call(obj, callbackfn);

        return !result && testResult[0] === true && called === 1;
    }
runTestCase(testcase);
