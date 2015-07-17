// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.8.2.11-1
description: Math.max({}) is NaN
includes: [runTestCase.js]
---*/

function testcase() {
    return isNaN(Math.max({}));
}
runTestCase(testcase);
