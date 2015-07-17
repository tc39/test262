// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.21-1-7
description: Array.prototype.reduce applied to string primitive
includes: [runTestCase.js]
---*/

function testcase() {

        function callbackfn(prevVal, curVal, idx, obj) {
            return obj instanceof String;
        }

        return Array.prototype.reduce.call("abc", callbackfn, 1);
    }
runTestCase(testcase);
