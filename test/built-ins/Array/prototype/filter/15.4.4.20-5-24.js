// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.20-5-24
description: Array.prototype.filter - string primitive can be used as thisArg
includes: [runTestCase.js]
---*/

function testcase() {

        var accessed = false;

        function callbackfn(val, idx, obj) {
            accessed = true;
            return this.valueOf() === "abc";
        }

        var newArr = [11].filter(callbackfn, "abc");

        return newArr[0] === 11 && accessed;
    }
runTestCase(testcase);
