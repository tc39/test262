// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.16-7-c-ii-18
description: >
    Array.prototype.every - 'this' of 'callbackfn' is an String object
    when T is not an object (T is a string primitive)
includes: [runTestCase.js]
---*/

function testcase() {

        var accessed = false;

        function callbackfn(val, idx, obj) {
            accessed = true;
            return 'hello' === this.valueOf();
        }

        var obj = { 0: 11, length: 2 };

        return Array.prototype.every.call(obj, callbackfn, "hello") && accessed;
    }
runTestCase(testcase);
