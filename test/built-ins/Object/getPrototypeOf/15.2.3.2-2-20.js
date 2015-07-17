// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.2-2-20
description: >
    Object.getPrototypeOf returns the [[Prototype]] of its parameter
    (Function Object)
includes: [runTestCase.js]
---*/

function testcase() {
        var obj = function (a, b) {
            return a + b;
        };

        return Object.getPrototypeOf(obj) === Function.prototype;
    }
runTestCase(testcase);
