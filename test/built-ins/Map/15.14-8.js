// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: Check if Map is defined
includes: [runTestCase.js]
---*/

function testcase() {
    "use strict";
    return Map !== undefined;
};
runTestCase(testcase);
