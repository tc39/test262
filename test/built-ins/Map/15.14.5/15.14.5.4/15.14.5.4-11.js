// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: >
    Map.prototype.forEach add values after call to foreach has started
    and verifiy new values are visited
includes: [runTestCase.js]
---*/

function testcase() {
    var map = new Map();
    var values = [1, 2, 3];
    var visited = [];
    var myException = {};

    values.forEach(function (val) {
        map.set(val, val);
    });

    map.forEach(function (arg1, arg2, arg3) {
        arg3.set(arg1, arg2);
        visited.push(arg1);
    });

    if (visited.length !== 3 || map.size !== 3 || visited.join(',') !== '1,2,3') return false;

    visited = [];
    try {
        map.forEach(function (arg1, arg2, arg3) {
            map.delete(arg2);
            map.set(arg2);
            visited.push(arg2);
            if (visited.length == 6) throw myException;
        });
    } catch (e) {
        if (e === myException) {
            if (map.size === 3 && visited.join(',') === '1,2,3,1,2,3') { return true; }
        }
    }

    return false;
};

runTestCase(testcase);
