// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: new WeakMap()
includes: [runTestCase.js]
---*/

function testcase() {
    var map = new WeakMap();

    if (!(map instanceof WeakMap)) return false;
    if (map.has({}) || map.has([])) return false;
    if (map.delete({}) || map.delete(new Date()) || map.delete([])) return false;

    return true;
};
runTestCase(testcase);
