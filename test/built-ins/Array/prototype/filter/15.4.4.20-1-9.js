// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.20-1-9
description: Array.prototype.filter applied to Function object
includes: [runTestCase.js]
---*/

function testcase() {

        function callbackfn(val, idx, obj) {
            return obj instanceof Function;
        }

        var obj = function (a, b) {
            return a + b;
        };
        obj[0] = 11;
        obj[1] = 9;

        var newArr = Array.prototype.filter.call(obj, callbackfn);

        return newArr[0] === 11 && newArr[1] === 9;
    }
runTestCase(testcase);
