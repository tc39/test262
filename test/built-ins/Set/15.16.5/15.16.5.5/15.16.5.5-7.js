// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: Set.prototype.forEach values are visited in insertion order
includes: [runTestCase.js]
---*/

function testcase() {
    var called = false;
    var set = new Set();
    set.add(1);
    set.add(11);
    set.add(0);

    var visited = [];

    Set.prototype.forEach.call(set, function (val) {
         visited.push(val)
    });

    return visited.join(',') === '1,11,0';

};
runTestCase(testcase);
