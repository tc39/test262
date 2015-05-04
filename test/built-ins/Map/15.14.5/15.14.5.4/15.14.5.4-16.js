// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: Map.prototype.forEach verify Exception exits the loop
includes: [runTestCase.js]
---*/

function testcase() {
    var map = new Map();
    map.set(1, 2);
    map.set(2, 3);
    var count = 0;

    try{
        map.forEach(function (arg1, arg2, arg3) { count++; throw new Error(); });
    } catch (e) {
    }

    return count === 1;

};
runTestCase(testcase);
