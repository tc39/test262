// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: Map is instance of Function
includes: [runTestCase.js]
---*/

function testcase() {
    return Map instanceof Function;
};
runTestCase(testcase);
