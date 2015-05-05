// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: Map.prototype.clear check if map is empty
includes: [runTestCase.js]
---*/

function testcase() {
    var map = new Map();
    map.set();
    map.clear();
    return map.size === 0;
};
runTestCase(testcase);
