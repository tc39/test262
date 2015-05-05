// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: Set.prototype.clear check if map is empty
includes: [runTestCase.js]
---*/

function testcase() {
    var set = new Set();
    set.clear();
    return set.size === 0
};
runTestCase(testcase);
