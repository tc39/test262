// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.21-9-c-i-12
description: >
    Array.prototype.reduce - element to be retrieved is own accessor
    property that overrides an inherited data property on an Array
---*/

        var testResult = false;
        var initialValue = 0;
        function callbackfn(prevVal, curVal, idx, obj) {
            if (idx === 1) {
                testResult = (curVal === "11");
            }
        }

            Array.prototype[1] = 1;
            var arr = [0, ,2];

            Object.defineProperty(arr, "1", {
                get: function () {
                    return "11";
                },
                configurable: true
            });

            arr.reduce(callbackfn, initialValue);

assert(testResult, 'testResult !== true');
