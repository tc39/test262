// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: Testing length property of Math.expm1
includes: [runTestCase.js]
---*/

function testcase() {
    return Math.expm1.length === 1;
}
runTestCase(testcase);
