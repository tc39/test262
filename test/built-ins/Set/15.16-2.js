// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: Set is instance of Function
includes: [runTestCase.js]
---*/

function testcase() {
    return Set instanceof Function;
};
runTestCase(testcase);
