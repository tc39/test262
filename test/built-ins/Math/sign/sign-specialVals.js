// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: Math.sign with special values
includes: [runTestCase.js]
---*/

function testcase() {

    if (Number.isNaN(Math.sign(NaN)) === false) {
        $ERROR("Math.sign produces incorrect output for NaN");
        return false;
    }

    if (1/Math.sign(-0) !== Number.NEGATIVE_INFINITY) {
        $ERROR("Math.sign produces incorrect output for -0");
        return false;
    }

    if (1 / Math.sign(0) !== Number.POSITIVE_INFINITY) {
        $ERROR("Math.sign produces incorrect output for -0");
        return false;
    }

    return true;
}
runTestCase(testcase);
