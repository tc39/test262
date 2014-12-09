// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

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
