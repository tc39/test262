// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: Testing Number.parseFloat with sample values.
includes: [runTestCase.js]
---*/

function verify(act, exp) {
    if (Number.isNaN(exp)) {
        return Number.isNaN(Number.parseFloat(act));
    }
    return Number.parseFloat(act) === exp;
}

function testcase() {
    try {
        var inputs = [Number.POSITIVE_INFINITY, Number.NEGATIVE_INFINITY, NaN, "1.000000001", undefined, null, true, false, new Object(1.01)];
        var outputs = [Number.POSITIVE_INFINITY, Number.NEGATIVE_INFINITY, NaN, 1.000000001, NaN, NaN, NaN, NaN, 1.01];
        for (var i in inputs) {
            if (verify(inputs[i], outputs[i]) === false) {
                $ERROR("Number.parseFloat produces incorrect output for " + inputs[i]);
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
