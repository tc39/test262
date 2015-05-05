// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: WeakMap.prototype.get verify for non-existent key
includes: [runTestCase.js]
---*/

function testcase() {

    var map = new WeakMap();

    map.set(new Date(), 1);
    map.set({}, 2);

    if (map.get(new Date()) === 1) return false;
    if (map.get({}) == 2) return false;
    if (map.get(new Error()) !== undefined) return false;

    return true;
};
runTestCase(testcase);
