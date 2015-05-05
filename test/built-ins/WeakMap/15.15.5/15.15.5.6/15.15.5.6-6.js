// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: WeakMap.prototype.set set emppty value
includes: [runTestCase.js]
---*/

function testcase() {
    var map = new WeakMap();
    var key = {};
    map.set(key);
    return (map.get(eval("key")) === undefined);
};
runTestCase(testcase);
