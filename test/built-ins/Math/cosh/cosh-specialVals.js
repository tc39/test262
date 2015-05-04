// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: Math.cosh with special values
includes: [runTestCase.js]
---*/

function testcase() {

    if (Number.isNaN(Math.cosh(NaN)) === false) {
        $ERROR("Math.cosh produces incorrect output for NaN");
        return false;
    }

    if (Math.cosh(0) !== 1) {
        $ERROR("Math.cosh should produce 1 for input = 0");
        return false;
    }

    if (Math.cosh(-0) !== 1) {
        $ERROR("Math.cosh should produce 1 for input = -0");
        return false;
    }

    if (Math.cosh(Number.NEGATIVE_INFINITY) !== Number.POSITIVE_INFINITY) {
        $ERROR("Math.cosh should produce Number.POSITIVE_INFINITY for Number.NEGATIVE_INFINITY");
        return false;
    }

    if (Math.cosh(Number.POSITIVE_INFINITY) !== Number.POSITIVE_INFINITY) {
        $ERROR("Math.cosh should produce Number.POSITIVE_INFINITY for Number.POSITIVE_INFINITY");
        return false;
    }
    return true;
}
runTestCase(testcase);
