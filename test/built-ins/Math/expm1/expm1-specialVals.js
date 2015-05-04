// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: Math.expm1 with sample values.
includes: [runTestCase.js]
---*/

function testcase() {

    if (Number.isNaN(Math.expm1(NaN)) === false) {
        $ERROR("Math.expm1 produces incorrect output for NaN");
        return false;
    }

    if (Math.expm1(Number.NEGATIVE_INFINITY) !== -1) {
        $ERROR("Math.expm1 should produce -1 for Number.NEGATIVE_INFINITY");
        return false;
    }

    if (Math.expm1(Number.POSITIVE_INFINITY) !== Number.POSITIVE_INFINITY) {
        $ERROR("Math.expm1 should produce POSITIVE infinity for Number.POSITIVE_INFINITY");
        return false;
    }

    if ((1 / Math.expm1(-0)) !== Number.NEGATIVE_INFINITY) {
        $ERROR("Math.expm1 should produce -0 for -0");
        return false;
    }

    if ((1 / Math.expm1(0)) !== Number.POSITIVE_INFINITY) {
        $ERROR("Math.expm1 should produce +0 for +0");
        return false;
    }
    return true;
}
runTestCase(testcase);
