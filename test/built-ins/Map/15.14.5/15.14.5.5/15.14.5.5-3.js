// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: Map.prototype.get verify for non-existent key
includes: [runTestCase.js]
---*/

function testcase() {

    var map = new Map();

    map.set(0, 1);
    map.set({}, 2);

    if (map.get(0) !== 1) return false;
    if (map.get({}) === 2) return false;

    return true;
};
runTestCase(testcase);
