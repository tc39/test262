// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: Accuracy tests for sign
includes: [runTestCase.js]
---*/

// [input, expectedOutput]
var data = [
[Number.POSITIVE_INFINITY,1],
[Number.NEGATIVE_INFINITY,-1],
[Number.MAX_VALUE,1],
[Number.MIN_VALUE, 1],
[-1, -1],
[-Number.MAX_VALUE, -1],
[-Number.MIN_VALUE, -1],
[Number.EPSILON, 1],
[-Number.EPSILON, -1],
[Math.PI, 1],
[0xffff, 1],
[004, 1],
[new Object(), NaN],
[undefined, NaN],
[null,0]
];

function verify(act, exp) {
    if (Number.isNaN(exp)) {
        return Number.isNaN(Math.sign(act));
    }
    return Math.sign(act) === exp;
}

function testcase() {
    for (var i in data) {
        // either the values are equal or its NaN
        if(verify(data[i][0],data[i][1])!==true){
            $ERROR("Math.sign produces incorrect result for: " + data[i][0]);
        }
    }
    return true;
}
runTestCase(testcase);
