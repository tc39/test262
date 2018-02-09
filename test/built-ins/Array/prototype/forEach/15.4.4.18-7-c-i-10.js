// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-array.prototype.foreach
es5id: 15.4.4.18-7-c-i-10
description: >
    Array.prototype.forEach - element to be retrieved is own accessor
    property on an Array
---*/

        var testResult = false;

        function callbackfn(val, idx, obj) {
            if (idx === 2) {
                testResult = (val === 12);
            }
        }

        var arr = [];

        Object.defineProperty(arr, "2", {
            get: function () {
                return 12;
            },
            configurable: true
        });

        arr.forEach(callbackfn);

assert(testResult, 'testResult !== true');
