// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: Math.Log10 with sample values.
includes: [runTestCase.js]
---*/

function verify(act, exp) {
    if (Number.isNaN(exp)) {
        return Number.isNaN(Math.log10(act));
    }
    return Math.log10(act) === exp;
}

function testcase() {
    try {
        var str = "sample";
        var searchStr = "sam";
        var inputs = [-0, +0, -0.9, NaN, -10, -Infinity, null, undefined, Number.POSITIVE_INFINITY,1,10.00,100.00,1000.00];
        var outputs = [Number.NEGATIVE_INFINITY, Number.NEGATIVE_INFINITY, NaN, NaN, NaN, NaN, Number.NEGATIVE_INFINITY, NaN, Number.POSITIVE_INFINITY, 0, 1,2,3];
        for (var i in inputs) {
            if (verify(inputs[i],outputs[i])===false) {
                $ERROR("Math.log10 produces incorrect output for " + inputs[i]);
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
