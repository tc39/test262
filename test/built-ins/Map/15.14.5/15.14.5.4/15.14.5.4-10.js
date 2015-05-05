// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: Map.prototype.forEach deleted entries are not visited
includes: [runTestCase.js]
---*/

function testcase() {
    var map1 = new Map();
    var map2 = new Map();
    var map3 = new Map();
    var testObj = {};
    var values = ['a', Infinity, testObj, 0];
    var keys = [0, testObj, Infinity, 'a'];

    var visited = [];

    for (var i = 0; i < keys.length; i++) {
        map1.set(keys[i], values[i]);
        map2.set(keys[i], values[i]);
        map3.set(keys[i], values[i]);
    }

    var called = 0;

    map1.forEach(function (arg1, arg2, arg3) {
        called++;
        map1.delete(keys[called]);
        called++;
        visited.push(arg2);
        visited.push(arg1);
    });

     if (visited.length !== 4 ||
        visited[0] !== 0 || visited[1] !== 'a' ||
        visited[2] !== Infinity || visited[3] !== testObj ||
        map1.size !== 2) return false;


     called = 0;
     visited = [];
     map2.forEach(function () {
        while (arguments[2].size !== 1) {
            arguments[2].delete(keys[++called]);
        }
        visited.push(arguments[1]);
        visited.push(arguments[0]);
     });

     if (visited.length !== 2 || visited[0] !== 0 || visited[1] !== 'a' || map2.size !== 1) return false;


    called = 0;
    visited = [];
    map3.forEach(function (arg1, arg2, arg3) {
        while (arg3.size !== 0) {
            arg3.delete(keys[called]);
            called++;
        }
        visited.push(arg2);
        visited.push(arg1);
    });

    if (visited.length !== 2 || visited[0] !== 0 || visited[1] !== 'a' || map3.size !== 0) return false;

    return true

};

runTestCase(testcase);
