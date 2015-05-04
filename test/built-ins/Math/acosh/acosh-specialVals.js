// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: Math.acosh with special values
includes: [runTestCase.js]
---*/

function testcase() {

    if (Number.isNaN(Math.acosh(NaN)) === false) {
        $ERROR("Math.acosh produces incorrect output for NaN");
        return false;
    }

    if (Number.isNaN(Math.acosh(0)) === false) {
        $ERROR("Math.acosh should produce NaN for values < 1");
        return false;
    }

    if (Number.isNaN(Math.acosh(Number.NEGATIVE_INFINITY)) === false) {
        $ERROR("Math.acosh should produce NaN for inputs <1");
        return false;
    }

    if (Math.acosh(Number.NEGATIVE_INFINITY) === Number.POSITIVE_INFINITY) {
        $ERROR("Math.acosh should produce POSITIVE_INFINITY for input Number.POSITIVE_INFINITY");
        return false;
    }


    if (Math.acosh(+1) !== 0) {
        $ERROR("Math.acosh should produce 0 for +1");
        return false;
    }

    return true;
}
runTestCase(testcase);
