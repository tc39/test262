// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: Map.prototype.has on empty map
includes: [runTestCase.js]
---*/

function testcase() {
    var map = new Map();

    return (map.has() === false) &&
           (map.has(undefined) === false) &&
           (map.has(null) === false);
};
runTestCase(testcase);
