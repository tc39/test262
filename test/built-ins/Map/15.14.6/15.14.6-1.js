// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: Map instances are extensible dynamic objects
includes: [runTestCase.js]
---*/

function testcase() {
    var map = new Map();

    map.a = 1;
    if (map.a !== 1) return false;

    delete map.a;
    if (map.a !== undefined) return false;

    return true;

};
runTestCase(testcase);
