// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: Math.atanh with special values
includes: [runTestCase.js]
---*/

function testcase() {
        var inputs = [-1.9, NaN, -10, -Infinity, 1.9,10, Number.POSITIVE_INFINITY];
        for (var i in inputs) {
            if (Number.isNaN(Math.atanh(inputs[i]))===false) {
                $ERROR("Math.atanh produces incorrect output for " + inputs[i]);
                return false;
            }
        }
        if (Math.atanh(-1) !== Number.NEGATIVE_INFINITY) {
            $ERROR("Math.atanh should produce negative infinity for -1");
            return false;
        }

        if (Math.atanh(+1) !== Number.POSITIVE_INFINITY) {
            $ERROR("Math.atanh should produce POSITIVE infinity for +1");
            return false;
        }

        if ((1/Math.atanh(-0)) !== Number.NEGATIVE_INFINITY) {
            $ERROR("Math.atanh should produce -0 for -0");
            return false;
        }

        if ((1 / Math.atanh(0)) !== Number.POSITIVE_INFINITY) {
            $ERROR("Math.atanh should produce +0 for +0");
            return false;
        }
        return true;
}
runTestCase(testcase);
