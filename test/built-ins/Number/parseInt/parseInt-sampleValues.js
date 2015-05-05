// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: Testing Number.parseInt with sample values.
includes: [runTestCase.js]
---*/

function verify(act, exp) {
    if (Number.isNaN(exp)) {
        return Number.isNaN(Number.parseInt(act));
    }
    return Number.parseInt(act) === exp;
}

function testcase() {
    try {
        var inputs = [Number.POSITIVE_INFINITY, Number.NEGATIVE_INFINITY, NaN, "1", undefined, null, true, false, new Object(1)];
        var outputs = [NaN, NaN, NaN, 1, NaN, NaN, NaN, NaN, 1];
        for (var i in inputs) {
            if (verify(inputs[i], outputs[i]) === false) {
                $ERROR("Number.parseInt produces incorrect output for " + inputs[i]);
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
