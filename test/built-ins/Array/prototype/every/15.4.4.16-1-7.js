// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.16-1-7
description: Array.prototype.every applied to string primitive
includes: [runTestCase.js]
---*/

function testcase() {
        function callbackfn(val, idx, obj) {
            return !(obj instanceof String);
        }

        return !Array.prototype.every.call("hello\nworld\\!", callbackfn);
    }
runTestCase(testcase);
