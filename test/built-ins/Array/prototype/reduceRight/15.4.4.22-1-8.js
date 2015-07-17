// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.22-1-8
description: Array.prototype.reduceRight applied to String object
includes: [runTestCase.js]
---*/

function testcase() {

        var obj = new String("hello\nworld\\!");
        var accessed = false;

        function callbackfn(prevVal, curVal, idx, o) {
            accessed = true;
            return o instanceof String;
        }

        return Array.prototype.reduceRight.call(obj, callbackfn, "h") && accessed;
    }
runTestCase(testcase);
