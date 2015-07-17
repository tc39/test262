// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.16-2-4
description: >
    Array.prototype.every - 'length' is own data property that
    overrides an inherited data property on an Array
includes: [runTestCase.js]
---*/

function testcase() {
        var arrProtoLen = 0;
        function callbackfn1(val, idx, obj) {
            return val > 10;
        }

        function callbackfn2(val, idx, obj) {
            return val > 11;
        }

        try {
            arrProtoLen = Array.prototype.length;
            Array.prototype.length = 0;
            Array.prototype[2] = 9;

            return [12, 11].every(callbackfn1) &&
                ![12, 11].every(callbackfn2);
        } finally {
            Array.prototype.length = arrProtoLen;
            delete Array.prototype[2];
        }

    }
runTestCase(testcase);
