// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.17-2-18
description: >
    Array.prototype.some applied to String object which implements its
    own property get method
includes: [runTestCase.js]
---*/

function testcase() {
        function callbackfn1(val, idx, obj) {
            return parseInt(val, 10) > 1;
        }

        function callbackfn2(val, idx, obj) {
            return parseInt(val, 10) > 2;
        }

        var str = new String("12");
        try {
            String.prototype[2] = "3";
            return Array.prototype.some.call(str, callbackfn1) &&
                !Array.prototype.some.call(str, callbackfn2);
        } finally {
            delete String.prototype[2];
        }
    }
runTestCase(testcase);
