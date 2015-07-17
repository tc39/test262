// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.16-2-18
description: >
    Array.prototype.every applied to String object, which implements
    its own property get method
includes: [runTestCase.js]
---*/

function testcase() {
        function callbackfn1(val, idx, obj) {
            return parseInt(val, 10) > 1;
        }

        function callbackfn2(val, idx, obj) {
            return parseInt(val, 10) > 2;
        }

        var str = new String("432");
        try {
            String.prototype[3] = "1";
            return Array.prototype.every.call(str, callbackfn1) &&
            !Array.prototype.every.call(str, callbackfn2);
        } finally {
            delete String.prototype[3];
        }
    }
runTestCase(testcase);
