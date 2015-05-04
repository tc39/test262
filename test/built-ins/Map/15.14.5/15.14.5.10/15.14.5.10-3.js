// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: get Map.prototype.size Size of set containing ECMAScript values
includes: [runTestCase.js]
---*/

function testcase() {

    var map = new Map();

    map.set(1);
    map.set(undefined);
    map.set(null);
    map.set({})

    return map.size === 4;


};
runTestCase(testcase);
