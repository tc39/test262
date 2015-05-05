// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: WeakMap.prototype.set using eval and functions returning keys
includes: [runTestCase.js]
---*/

function testcase() {
    var map = new WeakMap();
    var key = {};
    map.set(key, 1);
    map.set(key, 2);

    return (map.get(eval("key")) === 2) && (map.get((function () { return key; })()) === 2);

};
runTestCase(testcase);
