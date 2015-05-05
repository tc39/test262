// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: Map.prototype.delete use dynamic keys
includes: [runTestCase.js]
---*/

function testcase() {
    var map = new Map();
    map.set(10);
    map.set(5);
    map.set(6);

    return map.delete(5 + 5) && map.delete(Math.sqrt(25)) && map.delete(2 * 3);
};
runTestCase(testcase);
