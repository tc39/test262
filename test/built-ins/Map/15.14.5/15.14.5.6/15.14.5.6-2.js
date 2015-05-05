// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: Map.prototype.has verification of function
includes: [runTestCase.js]
---*/

function testcase() {
    var map = new Map();
    var values = [1, -1, +0, -0, Infinity, -Infinity, null, NaN, {}, '', true, false, function () { }, []];

    for (var i = 0; i < values.length; i++) {
        map.set(values[i]);
    }

    for (i = 0; i < values.length; i++) {
        if(!map.has(values[i])) return false;
    }

    return true;
};
runTestCase(testcase);
