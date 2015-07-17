// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.17-1-8
description: Array.prototype.some applied to String object
includes: [runTestCase.js]
---*/

function testcase() {
        function callbackfn(val, idx, obj) {
            return obj instanceof String;
        }

        var obj = new String("hello\nw_orld\\!");
        return Array.prototype.some.call(obj, callbackfn);
    }
runTestCase(testcase);
