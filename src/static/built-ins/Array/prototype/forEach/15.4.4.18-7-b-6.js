// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.18-7-b-6
description: >
    Array.prototype.forEach - properties can be added to prototype
    after current position are visited on an Array-like object
---*/

        var testResult = false;

        function callbackfn(val, idx, obj) {
            if (idx === 1 && val === 6.99) {
                testResult = true;
            }
        }

        var obj = { length: 2 };

        Object.defineProperty(obj, "0", {
            get: function () {
                Object.defineProperty(Object.prototype, "1", {
                    get: function () {
                        return 6.99;
                    },
                    configurable: true
                });
                return 0;
            },
            configurable: true
        });

            Array.prototype.forEach.call(obj, callbackfn);

assert(testResult, 'testResult !== true');
