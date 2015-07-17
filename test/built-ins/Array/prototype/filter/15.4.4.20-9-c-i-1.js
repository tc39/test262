// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.20-9-c-i-1
description: >
    Array.prototype.filter - element to be retrieved is own data
    property on an Array-like object
includes: [runTestCase.js]
---*/

function testcase() {

        var kValue = {};
        function callbackfn(val, idx, obj) {
            return (idx === 5) && (val === kValue);
        }

        var obj = { 5: kValue, length: 100 };

        var newArr = Array.prototype.filter.call(obj, callbackfn);

        return newArr.length === 1 && newArr[0] === kValue;
    }
runTestCase(testcase);
