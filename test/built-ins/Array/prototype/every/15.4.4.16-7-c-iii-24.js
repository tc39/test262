// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.16-7-c-iii-24
description: >
    Array.prototype.every - return value of callbackfn is an Error
    object
includes: [runTestCase.js]
---*/

function testcase() {

        var accessed = false;

        function callbackfn(val, idx, obj) {
            accessed = true;
            return new EvalError();
        }

        return [11].every(callbackfn) && accessed;
    }
runTestCase(testcase);
