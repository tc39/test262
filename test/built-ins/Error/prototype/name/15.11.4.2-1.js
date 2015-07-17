// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.11.4.2-1
description: Error.prototype.name is not enumerable.
includes: [runTestCase.js]
---*/

function testcase() {
        for (var i in Error.prototype) {
            if (i==="name") {
                return false;
            }
        }
        return true;
}
runTestCase(testcase);
