// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.11.4.3-1
description: Error.prototype.message is not enumerable.
includes: [runTestCase.js]
---*/

function testcase() {
        for (var i in Error.prototype) {
            if (i==="message") {
                return false;
            }
        }
        return true;
}
runTestCase(testcase);
