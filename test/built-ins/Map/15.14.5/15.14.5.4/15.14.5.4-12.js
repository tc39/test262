// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: Map.prototype.forEach clear the set from callbackfn
includes: [runTestCase.js]
---*/

function testcase() {
    var map = new Map();
    var values = [1, 2, 3];
    var visited = [];

    values.forEach(function (val) {
        map.set(val);
    });

    try {
        map.forEach(function (arg1, arg2, arg3) {
            arg3.clear();
            if (map.size !== 0) throw new Error();
            visited.push(arg2);
        });
    } catch (e) {
        return false;
    }

    if (visited.length !== 1 || visited[0] !== 1) return false;

    return true;

};
runTestCase(testcase);
