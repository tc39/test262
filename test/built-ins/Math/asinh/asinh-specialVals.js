// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: Math.asinh with special values
includes: [runTestCase.js]
---*/

function testcase() {

    if (Number.isNaN(Math.asinh(NaN)) === false) {
        $ERROR("Math.asinh produces incorrect output for NaN");
        return false;
    }

    if (Math.asinh(Number.NEGATIVE_INFINITY) !== Number.NEGATIVE_INFINITY) {
        $ERROR("Math.asinh should produce negative infinity for Number.NEGATIVE_INFINITY");
        return false;
    }

    if (Math.asinh(Number.POSITIVE_INFINITY) !== Number.POSITIVE_INFINITY) {
        $ERROR("Math.asinh should produce positive infinity for Number.POSITIVE_INFINITY");
        return false;
    }

    if ((1 / Math.asinh(-0)) !== Number.NEGATIVE_INFINITY) {
        $ERROR("Math.asinh should produce -0 for -0");
        return false;
    }

    if ((1 / Math.asinh(0)) !== Number.POSITIVE_INFINITY) {
        $ERROR("Math.asinh should produce +0 for +0");
        return false;
    }
    return true;
}
runTestCase(testcase);
