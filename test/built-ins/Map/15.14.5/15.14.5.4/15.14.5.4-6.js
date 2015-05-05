// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: Map.prototype.forEach verify if all values are visited
includes: [runTestCase.js]
---*/

function testcase() {
    var called = false;
    var map = new Map();
    map.set(1);
    map.set(2);
    map.set(3);

    var visitedKeys = [];
    var visitedVals = [];

    Map.prototype.forEach.call(map, function (val, key) {
         visitedKeys.push(key);
         visitedVals.push(val)
    });

    return (visitedKeys.join(',') === '1,2,3') && (visitedVals.join() === ',,');

};
runTestCase(testcase);
