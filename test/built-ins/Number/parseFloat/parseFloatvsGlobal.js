// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: Testing Number.parseFloat === parseFloat.
includes: [runTestCase.js]
---*/

function testcase() {
   return Number.parseFloat === parseFloat;
}
runTestCase(testcase);
