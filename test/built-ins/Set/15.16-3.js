// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: length property of Set constructor
includes: [runTestCase.js]
---*/

function testcase() {
    return Set.constructor.length === 1;
};
runTestCase(testcase);
