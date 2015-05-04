// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: Set.prototype.forEach deleted values are not visited
includes: [runTestCase.js]
---*/

function testcase() {
    var set1 = new Set();
    var set2 = new Set();
    var set3 = new Set();
    var testObj = {};
    var values = [1, 'a', Infinity, testObj, 0];
    var visited = [];

    values.forEach(function (val) {
        set1.add(val);
        set2.add(val);
        set3.add(val);
    })

    var called = 0;

    set1.forEach(function (arg1, arg2, arg3) {
        set1.delete(values[++called]);
        called++;
        visited.push(arg1);
    });


    if (visited.length !== 3 || visited[0] !== 1 || visited[1] !== Infinity || visited[2] !== +0 || set1.size !== 3) return false;

    called = 0;
    visited = [];
    set2.forEach(function () {
        while (arguments[2].size !== 1) {
            arguments[2].delete(values[++called]);
        }
        visited.push(arguments[0]);
    });

    if (visited.length !== 1 || visited[0] !== 1 || set2.size !== 1) return false;

    called = 0;
    visited = [];
    set3.forEach(function (arg1, arg2, arg3) {

        while (arg3.size !== 0) {
            arg3.delete(values[called]);
            called++;
        }
        visited.push(arg1);
    });

    if (visited.length !== 1 || visited[0] !== 1 || set3.size !== 0) return false;

    return true;

};
runTestCase(testcase);
