// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: Map.prototype.delete verify return value
includes: [runTestCase.js]
---*/

function testcase() {
    var map = new Map();

    if (map.delete()) return false;

    map.set();
    map.set(Infinity,1);
    map.set(1,1);

    return map.delete() && map.delete(Infinity) && map.delete(1);
};
runTestCase(testcase);
