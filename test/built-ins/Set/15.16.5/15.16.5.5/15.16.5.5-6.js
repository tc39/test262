// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: Set.prototype.forEach verify if all values are visited
includes: [runTestCase.js]
---*/

function testcase() {
    var called = false;
    var set = new Set();
    set.add(1);
    set.add(2);
    set.add(3);

    var visited = [];

    Set.prototype.forEach.call(set, function (val) {
         visited.push(val)
    });

    return visited.join(',') === '1,2,3';

};
runTestCase(testcase);
