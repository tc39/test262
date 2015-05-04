// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: Map.prototype.clear check if set is empty
includes: [runTestCase.js]
---*/

function testcase() {
    var map = new Map();
    map.clear();
    return map.size === 0
};
runTestCase(testcase);
