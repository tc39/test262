// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: Testing length property of Math.log10
includes: [runTestCase.js]
---*/

function testcase() {
    return Math.log10.length === 1;
}
runTestCase(testcase);
