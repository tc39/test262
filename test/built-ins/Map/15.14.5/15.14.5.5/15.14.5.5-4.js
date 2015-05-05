// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: Map.prototype.get verify using eval
includes: [runTestCase.js]
---*/

function testcase() {

    var map = new Map();
    map.set(-1, 1);
    if (map.get(eval("-1")) !== 1) return false;
    return true;
};
runTestCase(testcase);
