// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.20-2-4
description: >
    Array.prototype.filter - 'length' is own data property that
    overrides an inherited data property on an Array
includes: [runTestCase.js]
---*/

function testcase() {

        var arrProtoLen;

        function callbackfn(val, idx, obj) {
            return obj.length === 2;
        }

        try {
            arrProtoLen = Array.prototype.length;
            Array.prototype.length = 0;
            var newArr = [12, 11].filter(callbackfn);
            return newArr.length === 2;
        } finally {
            Array.prototype.length = arrProtoLen;
        }
    }
runTestCase(testcase);
