// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.10-10-c-ii-1
description: >
    Array.prototype.slice will slice a string from start to end when
    index property (read-only) exists in Array.prototype (Step 10.c.ii)
includes: [runTestCase.js]
---*/

function testcase() {
        var arrObj = [1, 2, 3];
        try {
            Object.defineProperty(Array.prototype, "0", {
                value: "test",
                writable: false,
                configurable: true
            });

            var newArr = arrObj.slice(0, 1);
            return newArr.hasOwnProperty("0") && newArr[0] === 1 && typeof newArr[1] === "undefined";
        } finally {
            delete Array.prototype[0];
        }
    }
runTestCase(testcase);
