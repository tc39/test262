// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: Accuracy tests for imul
includes: [runTestCase.js]
---*/

// [inputX, inputY,expectedOutput]

var data = [
[4294967295, 1, -1],
[4294967290, 1, -6],
[4294967296, 1, 0],
[4294967297, 1, 1],
[2147483648, 1, -2147483648],
[2147483647, 1, 2147483647],
[2147483649, 1, -2147483647],
[2147483647, 2, -2],
[NaN, NaN, 0],
[undefined, NaN, 0],
[undefined, 3, 0],
[Number.POSITIVE_INFINITY, Number.NEGATIVE_INFINITY, 0],
[1, Number.NEGATIVE_INFINITY, 0],
[true, false, 0],
["str", 1, 0],
[new Array(10), 3, 0],
[1, Number.MAX_SAFE_INTEGER, -1],
];

function testcase() {
    for (var i in data) {
        if (Math.imul(data[i][0], data[i][1]) !== data[i][2])
        {
            $ERROR("Math.imul produces incorrect result for: " + data[i][0]);
        }
    }
    return true;
}
runTestCase(testcase);
