// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: new Map()
includes: [runTestCase.js]
---*/

function testcase() {
    var map = new Map();

    if (!(map instanceof Map) || map.size !== 0) return false;
    if (map.has(undefined) || map.has(null)) return false;
    if (map.delete(undefined) || map.delete()) return false;

    return true;
};
runTestCase(testcase);
