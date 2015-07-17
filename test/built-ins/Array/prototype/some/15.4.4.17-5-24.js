// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.17-5-24
description: Array.prototype.some - string primitive can be used as thisArg
includes: [runTestCase.js]
---*/

function testcase() {

        function callbackfn(val, idx, obj) {
            return this.valueOf() === "abc";
        }

        return [11].some(callbackfn, "abc");
    }
runTestCase(testcase);
