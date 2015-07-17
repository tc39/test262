// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.16-1-3
description: Array.prototype.every applied to boolean primitive
includes: [runTestCase.js]
---*/

function testcase() {

        var accessed = false;

        function callbackfn(val, idx, obj) {
            accessed = true;
            return obj instanceof Boolean;
        }

        try {
            Boolean.prototype[0] = 1;
            Boolean.prototype.length = 1;
            return Array.prototype.every.call(false, callbackfn) && accessed;
        } finally {
            delete Boolean.prototype[0];
            delete Boolean.prototype.length;
        }
    }
runTestCase(testcase);
