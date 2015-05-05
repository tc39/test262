// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: Map.prototype.set duplicate key should only update existing value
includes: [runTestCase.js]
---*/

function testcase() {
    var map = new Map();
    var key = {};
    map.set();
    map.set(key, 2);

    return (map.get(key) === 2);

};
runTestCase(testcase);
