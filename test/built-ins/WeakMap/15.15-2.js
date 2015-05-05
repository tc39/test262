// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: WeakMap is instance of Function
includes: [runTestCase.js]
---*/

function testcase() {
    return WeakMap instanceof Function;
};
runTestCase(testcase);
