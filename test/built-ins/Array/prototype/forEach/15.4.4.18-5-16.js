// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.18-5-16
description: Array.prototype.forEach - RegExp Object can be used as thisArg
includes: [runTestCase.js]
---*/

function testcase() {

        var result = false;
        var objRegExp = new RegExp();

        function callbackfn(val, idx, obj) {
            result = (this === objRegExp);
        }

        [11].forEach(callbackfn, objRegExp);
        return result;
    }
runTestCase(testcase);
