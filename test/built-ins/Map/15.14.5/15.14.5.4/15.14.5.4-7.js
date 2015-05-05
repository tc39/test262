// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: Map.prototype.forEach values are visited in insertion order
includes: [runTestCase.js]
---*/

function testcase() {
    var called = false;
    var map = new Map();
    map.set(1,1);
    map.set(11,0);
    map.set(0,11);

    var visitedKeys = [];
    var visitedVals = [];

    Map.prototype.forEach.call(map, function (val, key) {
         visitedKeys.push(key);
         visitedVals.push(val)
    });

    return (visitedKeys.join(',') === '1,11,0') && (visitedVals.join() === '1,0,11');

};
runTestCase(testcase);
