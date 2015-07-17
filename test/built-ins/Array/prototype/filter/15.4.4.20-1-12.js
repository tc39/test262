// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.20-1-12
description: Array.prototype.filter applied to RegExp object
includes: [runTestCase.js]
---*/

function testcase() {

        function callbackfn(val, idx, obj) {
            return obj instanceof RegExp;
        }

        var obj = new RegExp();
        obj.length = 2;
        obj[1] = true;

        var newArr = Array.prototype.filter.call(obj, callbackfn);
        return newArr[0] === true;
    }
runTestCase(testcase);
