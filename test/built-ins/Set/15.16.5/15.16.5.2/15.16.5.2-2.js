// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: Set.prototype.add return value is undefined
includes: [runTestCase.js]
---*/

function testcase() {
    var set = new Set();
    return set.add(1) === set;
};
runTestCase(testcase);
