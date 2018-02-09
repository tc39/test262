// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-array.prototype.reduceright
es5id: 15.4.4.22-8-b-iii-1-10
description: >
    Array.prototype.reduceRight - element to be retrieved is own
    accessor property on an Array
---*/

        var testResult = false;
        function callbackfn(prevVal, curVal, idx, obj) {
            if (idx === 2) {
                testResult = (curVal === 2);
            }
        }

        var arr = [0, 1, , 3];

        Object.defineProperty(arr, "2", {
            get: function () {
                return 2;
            },
            configurable: true
        });

        arr.reduceRight(callbackfn);

assert(testResult, 'testResult !== true');
