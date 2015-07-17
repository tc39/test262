// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.16-5-21
description: Array.prototype.every - the global object can be used as thisArg
includes:
    - runTestCase.js
    - fnGlobalObject.js
---*/

function testcase() {

        var accessed = false;

        function callbackfn(val, idx, obj) {
            accessed = true;
            return this === fnGlobalObject();
        }

        return [11].every(callbackfn, fnGlobalObject()) && accessed;
    }
runTestCase(testcase);
