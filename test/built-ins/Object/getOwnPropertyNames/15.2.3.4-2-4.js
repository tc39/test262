// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.4-2-4
description: >
    Object.getOwnPropertyNames - returned array is the standard
    built-in constructor
includes: [runTestCase.js]
---*/

function testcase() {
        var oldArray = Array;
        Array = function () {
            throw new Error("invoke customer defined Array!");
        };

        var obj = {};
        try {
            var result = Object.getOwnPropertyNames(obj);
            return Object.prototype.toString.call(result) === "[object Array]";
        } catch (ex) {
            return false;
        } finally {
            Array = oldArray;
        }
    }
runTestCase(testcase);
