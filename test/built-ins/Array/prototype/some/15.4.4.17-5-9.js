// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.17-5-9
description: Array.prototype.some - Function Object can be used as thisArg
includes: [runTestCase.js]
---*/

function testcase() {

        var objFunction = function () { };

        function callbackfn(val, idx, obj) {
            return this === objFunction;
        }

        return [11].some(callbackfn, objFunction);
    }
runTestCase(testcase);
