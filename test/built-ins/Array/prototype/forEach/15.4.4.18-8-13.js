// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.18-8-13
description: >
    Array.prototype.forEach - undefined will be returned when 'len' is
    0
includes: [runTestCase.js]
---*/

function testcase() {

        var accessed = false;
        function callbackfn(val, idx, obj) {
            accessed = true;
        }

        var result = [].forEach(callbackfn);
        return typeof result === "undefined" && !accessed;
    }
runTestCase(testcase);
