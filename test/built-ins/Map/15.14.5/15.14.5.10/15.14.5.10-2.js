// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: get Map.prototype.size Empty Map
includes: [runTestCase.js]
---*/

function testcase() {
    var map = new Map();
    return map.size === 0;
};
runTestCase(testcase);
