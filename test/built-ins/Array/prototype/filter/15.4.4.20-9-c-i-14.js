// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.20-9-c-i-14
description: >
    Array.prototype.filter - element to be retrieved is own accessor
    property that overrides an inherited accessor property on an Array
includes: [runTestCase.js]
---*/

function testcase() {

        function callbackfn(val, idx, obj) {
            return idx === 0 && val === 11;
        }

        var arr = [];
        try {
            Object.defineProperty(Array.prototype, "0", {
                get: function () {
                    return 5;
                },
                configurable: true
            });

            Object.defineProperty(arr, "0", {
                get: function () {
                    return 11;
                },
                configurable: true
            });
            var newArr = arr.filter(callbackfn);

            return newArr.length === 1 && newArr[0] === 11;
        } finally {
            delete Array.prototype[0];
        }
    }
runTestCase(testcase);
