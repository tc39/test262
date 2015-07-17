// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.4-4-46
description: >
    Object.getOwnPropertyNames - inherited accessor property of Array
    object 'O' is not pushed into the returned array.
includes: [runTestCase.js]
---*/

function testcase() {
        try {
            var arr = [0, 1, 2];

            Object.defineProperty(Array.prototype, "protoProperty", {
                get: function () {
                    return "protoArray";
                },
                configurable: true
            });

            var result = Object.getOwnPropertyNames(arr);

            for (var p in result) {
                if (result[p] === "protoProperty") {
                    return false;
                }
            }
            return true;
        } finally {
            delete Array.prototype.protoProperty;
        }
    }
runTestCase(testcase);
