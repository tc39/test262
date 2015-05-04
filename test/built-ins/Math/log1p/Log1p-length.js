// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: Testing length property of Math.log1p
includes: [runTestCase.js]
---*/

function testcase() {
    return Math.log1p.length === 1;
}
runTestCase(testcase);
