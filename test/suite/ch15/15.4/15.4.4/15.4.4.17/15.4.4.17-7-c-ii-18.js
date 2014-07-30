// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
es5id: 15.4.4.17-7-c-ii-18
description: >
    Array.prototype.some - 'this' of 'callbackfn' is an String object
    when T is not an object (T is a string primitive)
includes: [runTestCase.js]
---*/

function testcase() {

        function callbackfn(val, idx, obj) {
            return this.valueOf() === "hello!";
        }

        var obj = { 0: 11, 1: 9, length: 2 };

        return Array.prototype.some.call(obj, callbackfn, "hello!");
    }
runTestCase(testcase);
