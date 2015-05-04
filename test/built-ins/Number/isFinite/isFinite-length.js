// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: Checking the length of Number.isFinite
includes: [runTestCase.js]
---*/

function testcase() {
    return Number.isFinite.length === 1;
}
runTestCase(testcase);
