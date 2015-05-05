// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: WeakMap.prototype.delete verify return value
includes: [runTestCase.js]
---*/

function testcase() {
    var map = new WeakMap();

    if (map.delete({})) return false;


    var key1 = {};
    var key2 = {};
    var key3 = {};

    map.set(key1);
    map.set(key2,1);
    map.set(key3,Infinity);

    return map.delete(key1) && map.delete(key2) && map.delete(key3);
};
runTestCase(testcase);
