// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.18-5-23
description: Array.prototype.forEach - number primitive can be used as thisArg
includes: [runTestCase.js]
---*/

function testcase() {

        var result = false;
        function callbackfn(val, idx, obj) {
            result = (this.valueOf() === 101);
        }

        [11].forEach(callbackfn, 101);
        return result;
    }
runTestCase(testcase);
