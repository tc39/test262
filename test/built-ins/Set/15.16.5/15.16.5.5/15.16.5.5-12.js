// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: Set.prototype.forEach clear the set from callbackfn
includes: [runTestCase.js]
---*/

function testcase() {
    var set = new Set();
    var values = [1, 2, 3];
    var visited = [];
    var mySetException = {};

    values.forEach(function (val) {
        set.add(val);
    });

    try{
        set.forEach(function (arg1, arg2, arg3) {
            arg3.clear();
            if (set.size !== 0) throw mySetException;
            visited.push(arg1);
        });
    } catch (e) {
        return false;
    }

    if (visited.length !== 1 || visited[0] !== 1) return false;

    return true;

};
runTestCase(testcase);
