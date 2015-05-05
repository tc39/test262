// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: Map.prototype.set set emppty value
includes: [runTestCase.js]
---*/

function testcase() {
    var map = new Map();
    var key = {};
    map.set(key);
    return (map.get(key) === undefined);
};
runTestCase(testcase);
