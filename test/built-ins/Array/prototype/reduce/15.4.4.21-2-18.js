// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.21-2-18
description: >
    Array.prototype.reduce applied to String object, which implements
    its own property get method
includes: [runTestCase.js]
---*/

function testcase() {

        function callbackfn(prevVal, curVal, idx, obj) {
            return (obj.length === 3);
        }

        var str = new String("012");

        return Array.prototype.reduce.call(str, callbackfn, 1) === true;
    }
runTestCase(testcase);
