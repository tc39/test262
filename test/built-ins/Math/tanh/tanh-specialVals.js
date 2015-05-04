// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: Math.tanh with special values
includes: [runTestCase.js]
---*/

function testcase() {
    if (Number.isNaN(Math.tanh(NaN)) === false) {
        $ERROR("Math.tanh produces incorrect output for NaN");
        return false;
    }

    if (Math.tanh(Number.NEGATIVE_INFINITY) !== -1) {
        $ERROR("Math.tanh should produce -1 for Number.NEGATIVE_INFINITY");
        return false;
    }

    if (Math.tanh(Number.POSITIVE_INFINITY) !== 1) {
        $ERROR("Math.tanh should produce 1 for Number.POSITIVE_INFINITY");
        return false;
    }

    if ((1 / Math.tanh(-0)) !== Number.NEGATIVE_INFINITY) {
        $ERROR("Math.tanh should produce -0 for -0");
        return false;
    }

    if ((1 / Math.tanh(0)) !== Number.POSITIVE_INFINITY) {
        $ERROR("Math.tanh should produce +0 for +0");
        return false;
    }
        return true;
}
runTestCase(testcase);
