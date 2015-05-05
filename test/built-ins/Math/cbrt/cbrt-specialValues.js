// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: Math.cbrt with special values
includes: [runTestCase.js]
---*/

function testcase() {

    if (Number.isNaN(Math.cbrt(NaN)) === false) {
        $ERROR("Math.cbrt produces incorrect output for NaN");
        return false;
    }
    if (Math.cbrt(Number.NEGATIVE_INFINITY) !== Number.NEGATIVE_INFINITY) {
        $ERROR("Math.cbrt should produce negative infinity for Number.NEGATIVE_INFINITY");
        return false;
    }

    if (Math.cbrt(Number.POSITIVE_INFINITY) !== Number.POSITIVE_INFINITY) {
        $ERROR("Math.cbrt should produce POSITIVE infinity for Number.POSITIVE_INFINITY");
        return false;
    }

    // testing with infinity as +0===-0
    if ((1 / Math.cbrt(-0)) !== Number.NEGATIVE_INFINITY) {
        $ERROR("Math.cbrt should produce -0 for -0");
        return false;
    }

    if ((1 / Math.cbrt(0)) !== Number.POSITIVE_INFINITY) {
        $ERROR("Math.cbrt should produce +0 for +0");
        return false;
    }
    return true;
}
runTestCase(testcase);
