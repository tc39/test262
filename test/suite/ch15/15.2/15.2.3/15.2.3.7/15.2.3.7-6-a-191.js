// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
es5id: 15.2.3.7-6-a-191
description: >
    Object.defineProperties - 'O' is an Array, 'P' is an array index
    property, 'P' is inherited accessor property  (15.4.5.1 step 4.c)
includes: [runTestCase.js]
---*/

function testcase() {
        try {
            Object.defineProperty(Array.prototype, "0", {
                get: function () {
                    return 11;
                },
                configurable: true
            });

            var arr = [];

            Object.defineProperties(arr, {
                "0": {
                    get: function () {
                        return 12;
                    },
                    configurable: false
                }
            });
            return arr.hasOwnProperty("0") && arr[0] === 12 && Array.prototype[0] === 11;
        } finally {
            delete Array.prototype[0];
        }
    }
runTestCase(testcase);
