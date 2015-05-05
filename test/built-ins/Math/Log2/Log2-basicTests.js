// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: Math.Log2 with sample values.
includes: [runTestCase.js]
---*/

function verify(act, exp) {
    if (Number.isNaN(exp)) {
        return Number.isNaN(Math.log2(act));
    }
    return Math.log2(act) === exp;
}

function testcase() {
    try {
        var inputs = [-0, +0, -0.9, NaN, -10, -Infinity, null, undefined, Number.POSITIVE_INFINITY,1,2.00,4.00,8.00];
        var outputs = [Number.NEGATIVE_INFINITY, Number.NEGATIVE_INFINITY, NaN, NaN, NaN, NaN, Number.NEGATIVE_INFINITY, NaN, Number.POSITIVE_INFINITY,0,1,2,3];
        for (var i in inputs) {
            if (verify(inputs[i],outputs[i])===false) {
                $ERROR("Math.log2 produces incorrect output for " +inputs[i]);
                return false;
            }
        }
        return true;
    }
    catch (e) {
        $ERROR(e.message);
        return false;
    }
}
runTestCase(testcase);
