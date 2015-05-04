// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: >
    Set.prototype.forEach add values after call to foreach has started
    and verifiy new values are visited
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

    set.forEach(function (arg1, arg2, arg3) {
        arg3.add(arg1);
        visited.push(arg1);
    });

    if (visited.length !== 3 || set.size !== 3 || visited.join(',') !== '1,2,3') return false;

    visited = [];
    try {
        set.forEach(function (arg1, arg2, arg3) {
            set.delete(arg1);
            set.add(arg1);
            visited.push(arg1);
            if (visited.length == 6) throw mySetException;
        });
    } catch (e) {
        if (e !== mySetException) {
            return false;
        }
    }
    if (visited.length !== 6) return false;

    if (set.size !== 3 || visited.join(',') !== '1,2,3,1,2,3') return false;

    return true;

};

runTestCase(testcase);
