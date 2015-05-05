// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: >
    WeakMap.prototype.delete verify Same Value Algorithm
    implementation in delete
includes: [runTestCase.js]
---*/

function testcase() {
    var map = new WeakMap();
    map.set({},1);
    return map.delete({})===false;
};
runTestCase(testcase);
