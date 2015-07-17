// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.18-5-9
description: Array.prototype.forEach - Function Object can be used as thisArg
includes: [runTestCase.js]
---*/

function testcase() {

        var result = false;
        var objString = function () { };

        function callbackfn(val, idx, obj) {
            result = (this === objString);
        }

        [11].forEach(callbackfn, objString);
        return result;
    }
runTestCase(testcase);
