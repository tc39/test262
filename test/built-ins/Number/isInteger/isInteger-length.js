// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: Testing Number.isInteger length property.
includes: [runTestCase.js]
---*/

function testcase() {
    return Number.isInteger.length === 1;
}
runTestCase(testcase);
