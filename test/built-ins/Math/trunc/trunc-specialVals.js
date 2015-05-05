// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: Math.trunc with sample values.
includes: [runTestCase.js]
---*/

function testcase() {

    if (Number.isNaN(Math.trunc(NaN)) === false) {
        $ERROR("Math.trunc produces incorrect output for NaN");
        return false;
    }

    if (Math.trunc(Number.NEGATIVE_INFINITY) !== Number.NEGATIVE_INFINITY) {
        $ERROR("Math.trunc should produce Number.NEGATIVE_INFINITY for Number.NEGATIVE_INFINITY");
        return false;
    }

    if (Math.trunc(Number.POSITIVE_INFINITY) !== Number.POSITIVE_INFINITY) {
        $ERROR("Math.trunc should produce POSITIVE infinity for Number.POSITIVE_INFINITY");
        return false;
    }

    if ((1 / Math.trunc(-0)) !== Number.NEGATIVE_INFINITY) {
        $ERROR("Math.trunc should produce -0 for -0");
        return false;
    }

    if ((1 / Math.trunc(0)) !== Number.POSITIVE_INFINITY) {
        $ERROR("Math.trunc should produce +0 for +0");
        return false;
    }

    return true;
}
runTestCase(testcase);
