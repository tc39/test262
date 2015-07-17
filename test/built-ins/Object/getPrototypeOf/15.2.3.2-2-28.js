// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.2-2-28
description: >
    Object.getPrototypeOf returns the [[Prototype]] of its parameter
    (the Arguments object)
includes: [runTestCase.js]
---*/

function testcase() {
        function fun() {
            return arguments;
        }
        var obj = fun(1, true, 3);

        return Object.getPrototypeOf(obj) === Object.prototype;
    }
runTestCase(testcase);
